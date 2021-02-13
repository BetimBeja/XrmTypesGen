import { AuthenticationContext, TokenResponse } from 'adal-node';
import { program } from 'commander';
import { mkdirSync, writeFile } from 'fs';
import { LocalStorage } from 'node-localstorage';
import { terms } from './terms';
import { getAttributeMeta, getForms, getFormsBySolution } from './queries';
import { render } from './renderer';

global.localStorage = new LocalStorage('./scratch');

program.version('0.0.0.1');

program
  .requiredOption('-u, --url <url>', `${terms.d365} Url. e.g. https://myorg.crm11.dynamics.com/`)
  .requiredOption('-n, --username <username>', `Username for ${terms.d365}`)
  .requiredOption('-p, --password <password>', `Password for ${terms.d365}`)
  .requiredOption(
    '-t, --tenent <tenent>',
    `${terms.AAD} authority. e.g. https://login.windows.net/myorg.onmicrosoft.com`,
  )
  .option('-c, --clientid <clientid>', 'OAuth Client Id', '51f81489-12ee-4a9e-aaae-a2591f45987d')
  .option('-s, --solution <solution>', `Unique ${terms.d365} Solution Name`)
  .option('-o, --output <output>', 'Output path', 'types');

program.parse();
const options = program.opts();

const Main = async (authToken: TokenResponse) => {
  localStorage.clear();
  console.log('getting form metadata');

  let formsResponse: any;
  if (options.solution) {
    formsResponse = await getFormsBySolution(authToken, options.url, options.solution);
  } else {
    formsResponse = await getForms(authToken, options.url);
  }
  const forms = formsResponse.value;

  const entities = [...new Set<string>(forms.map((data: any) => data.objecttypecode))];
  console.log('pre-cache attribute metatdata');
  await Promise.all(entities.map((value) => getAttributeMeta(value, authToken, options.url)));

  const formstd = await Promise.all(
    forms.map(async (data: any) => {
      const meta = await getAttributeMeta(data.objecttypecode, authToken, options.url);
      return {
        entity: data.objecttypecode,
        formtype: data.type === 2 ? 'main' : 'quickcreate',
        formname: data.name.replace(/ */g, ''),
        content: render(data, meta),
      };
    }),
  );

  console.log('saving type definition files');
  formstd.forEach((element: any) => {
    mkdirSync(`${options.output}/Xrm/Forms/${element.entity}/${element.formtype}`, {
      recursive: true,
    });
    writeFile(
      `${options.output}/Xrm/Forms/${element.entity}/${element.formtype}/${element.formname}.d.ts`,
      element.content,
      () => {},
    );
  });

  localStorage.clear();
  console.log('Finished!');
};

// #region Login
console.log('authenticating');
const authContext = new AuthenticationContext(options.tenent);
authContext.acquireTokenWithUsernamePassword(
  options.url,
  options.username,
  options.password,
  options.clientid,
  (error, response) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    }
    if ((response as TokenResponse).accessToken) {
      Main(response as TokenResponse);
    }
  },
);
// #endregion