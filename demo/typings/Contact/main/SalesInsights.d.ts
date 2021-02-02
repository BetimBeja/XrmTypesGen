/**
This file was generated using 'XrmTypesGen'. https://github.com/OliverFlint/XrmTypesGen
**/
declare namespace Xrm {
 namespace Ext {
  namespace Forms {
   namespace SalesInsights {
    type FormContext = Xrm.FormContext & {
     getAttribute(attributeName: "name"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "fax"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "websiteurl"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "parentaccountid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "tickersymbol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "address1_composite"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "mapcontrol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "notescontrol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "ActionCards"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "primarycontactid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "contactquickform"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "Contacts"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "accountopportunitiesgrid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "industrycode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "sic"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "ownershipcode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "description"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "originatingleadid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
     getAttribute(attributeName: "donotsendmm"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotemail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "followemail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotbulkemail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotphone"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotfax"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotpostalmail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "transactioncurrencyid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "creditlimit"): Xrm.Attributes.NumberControl;
     getAttribute(attributeName: "creditonhold"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "paymenttermscode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "address1_freighttermscode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "ChildAccounts"): Xrm.Attributes.Attribute;
     getControl(controlName: "name"): Xrm.Controls.StringControl;
     getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
     getControl(controlName: "fax"): Xrm.Controls.StringControl;
     getControl(controlName: "websiteurl"): Xrm.Controls.StringControl;
     getControl(controlName: "parentaccountid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "tickersymbol"): Xrm.Controls.Control;
     getControl(controlName: "address1_composite"): Xrm.Controls.StringControl;
     getControl(controlName: "mapcontrol"): Xrm.Controls.Control;
     getControl(controlName: "notescontrol"): Xrm.Controls.Control;
     getControl(controlName: "ActionCards"): Xrm.Controls.Control;
     getControl(controlName: "primarycontactid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "contactquickform"): Xrm.Controls.Control;
     getControl(controlName: "Contacts"): Xrm.Controls.Control;
     getControl(controlName: "accountopportunitiesgrid"): Xrm.Controls.Control;
     getControl(controlName: "industrycode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "sic"): Xrm.Controls.StringControl;
     getControl(controlName: "ownershipcode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "description"): Xrm.Controls.StringControl;
     getControl(controlName: "originatingleadid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
     getControl(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "followemail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "transactioncurrencyid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "creditlimit"): Xrm.Controls.NumberAttribute;
     getControl(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "ChildAccounts"): Xrm.Controls.Control;
     ui: Ui;
     data: Data;
    };
    type Data = Xrm.Data & {
     attributes: Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {;
      get(AttributeName: "name"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "telephone1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "fax"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "websiteurl"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "parentaccountid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "tickersymbol"): Xrm.Attributes.Attribute;
      get(AttributeName: "address1_composite"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "mapcontrol"): Xrm.Attributes.Attribute;
      get(AttributeName: "notescontrol"): Xrm.Attributes.Attribute;
      get(AttributeName: "ActionCards"): Xrm.Attributes.Attribute;
      get(AttributeName: "primarycontactid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "contactquickform"): Xrm.Attributes.Attribute;
      get(AttributeName: "Contacts"): Xrm.Attributes.Attribute;
      get(AttributeName: "accountopportunitiesgrid"): Xrm.Attributes.Attribute;
      get(AttributeName: "industrycode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "sic"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "ownershipcode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "description"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "originatingleadid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
      get(AttributeName: "donotsendmm"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotemail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "followemail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotbulkemail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotphone"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotfax"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotpostalmail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "transactioncurrencyid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "creditlimit"): Xrm.Attributes.NumberControl;
      get(AttributeName: "creditonhold"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "paymenttermscode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "address1_shippingmethodcode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "address1_freighttermscode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "ChildAccounts"): Xrm.Attributes.Attribute;
     };
    };
    type Ui = Xrm.Ui & {
     tabs: Tabs;
     controls: Xrm.Collection.ItemCollection<Xrm.Attributes.Control> & {;
      get(controlName: "name"): Xrm.Controls.StringControl;
      get(controlName: "telephone1"): Xrm.Controls.StringControl;
      get(controlName: "fax"): Xrm.Controls.StringControl;
      get(controlName: "websiteurl"): Xrm.Controls.StringControl;
      get(controlName: "parentaccountid"): Xrm.Controls.LookupAttribute;
      get(controlName: "tickersymbol"): Xrm.Controls.Control;
      get(controlName: "address1_composite"): Xrm.Controls.StringControl;
      get(controlName: "mapcontrol"): Xrm.Controls.Control;
      get(controlName: "notescontrol"): Xrm.Controls.Control;
      get(controlName: "ActionCards"): Xrm.Controls.Control;
      get(controlName: "primarycontactid"): Xrm.Controls.LookupAttribute;
      get(controlName: "contactquickform"): Xrm.Controls.Control;
      get(controlName: "Contacts"): Xrm.Controls.Control;
      get(controlName: "accountopportunitiesgrid"): Xrm.Controls.Control;
      get(controlName: "industrycode"): Xrm.Controls.OptionSetControl;
      get(controlName: "sic"): Xrm.Controls.StringControl;
      get(controlName: "ownershipcode"): Xrm.Controls.OptionSetControl;
      get(controlName: "description"): Xrm.Controls.StringControl;
      get(controlName: "originatingleadid"): Xrm.Controls.LookupAttribute;
      get(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
      get(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlName: "followemail"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      get(controlName: "transactioncurrencyid"): Xrm.Controls.LookupAttribute;
      get(controlName: "creditlimit"): Xrm.Controls.NumberAttribute;
      get(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
      get(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
      get(controlName: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
      get(controlName: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
      get(controlName: "ChildAccounts"): Xrm.Controls.Control;
     };
    };
    type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
     get(tabName: "SUMMARY_TAB"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "ACCOUNT_INFORMATION"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "name"): Xrm.Controls.StringControl;
         get(controlName: "telephone1"): Xrm.Controls.StringControl;
         get(controlName: "fax"): Xrm.Controls.StringControl;
         get(controlName: "websiteurl"): Xrm.Controls.StringControl;
         get(controlName: "parentaccountid"): Xrm.Controls.LookupAttribute;
         get(controlName: "tickersymbol"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "ADDRESS"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "address1_composite"): Xrm.Controls.StringControl;
        }
       }
       get(sectionName: "MapSection"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "mapcontrol"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "SOCIAL_PANE_TAB"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "notescontrol"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "Summary_section_6"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "ActionCards"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "SUMMARY_TAB_section_6"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "primarycontactid"): Xrm.Controls.LookupAttribute;
         get(controlName: "contactquickform"): Xrm.Controls.Control;
         get(controlName: "Contacts"): Xrm.Controls.Control;
         get(controlName: "accountopportunitiesgrid"): Xrm.Controls.Control;
        }
       }
      };
     };
     get(tabName: "DETAILS_TAB"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "COMPANY_PROFILE"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "industrycode"): Xrm.Controls.OptionSetControl;
         get(controlName: "sic"): Xrm.Controls.StringControl;
         get(controlName: "ownershipcode"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "DETAILS_TAB_section_6"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "description"): Xrm.Controls.StringControl;
        }
       }
       get(sectionName: "MARKETING"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "originatingleadid"): Xrm.Controls.LookupAttribute;
         get(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
         get(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "CONTACT_PREFERENCES"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
         get(controlName: "followemail"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "BILLING"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "transactioncurrencyid"): Xrm.Controls.LookupAttribute;
         get(controlName: "creditlimit"): Xrm.Controls.NumberAttribute;
         get(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
         get(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "SHIPPING"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
         get(controlName: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "ChildAccounts"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "ChildAccounts"): Xrm.Controls.Control;
        }
       }
      };
     };
    };
   }
  }
 }
}