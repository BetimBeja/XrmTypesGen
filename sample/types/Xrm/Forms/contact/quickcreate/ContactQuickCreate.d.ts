// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.contact.quickcreate.ContactQuickCreate {
    type Form = FormContext;
    interface FormContext extends Xrm.FormContext {
      //#region form context attributes
      getAttribute(
        attributename: "businesscard"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "firstname"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "lastname"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "parentcustomerid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "emailaddress1"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "mobilephone"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "description"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "address1_line1"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "address1_line2"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "address1_city"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "address1_postalcode"
      ): Xrm.Attributes.StringAttribute;
      //#endregion
      //#region form context contols
      getControl(controlname: "businesscard"): Xrm.Controls.StringControl;
      getControl(controlname: "firstname"): Xrm.Controls.StringControl;
      getControl(controlname: "lastname"): Xrm.Controls.StringControl;
      getControl(controlname: "jobtitle"): Xrm.Controls.StringControl;
      getControl(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      getControl(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      getControl(controlname: "mobilephone"): Xrm.Controls.StringControl;
      getControl(controlname: "telephone1"): Xrm.Controls.StringControl;
      getControl(controlname: "description"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_line1"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_line2"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_city"): Xrm.Controls.StringControl;
      getControl(
        controlname: "address1_postalcode"
      ): Xrm.Controls.StringControl;
      //#endregion

      data: Data;
      ui: Ui;
    }

    interface Controls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "businesscard"): Xrm.Controls.StringControl;
      get(controlname: "firstname"): Xrm.Controls.StringControl;
      get(controlname: "lastname"): Xrm.Controls.StringControl;
      get(controlname: "jobtitle"): Xrm.Controls.StringControl;
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "description"): Xrm.Controls.StringControl;
      get(controlname: "address1_line1"): Xrm.Controls.StringControl;
      get(controlname: "address1_line2"): Xrm.Controls.StringControl;
      get(controlname: "address1_city"): Xrm.Controls.StringControl;
      get(controlname: "address1_postalcode"): Xrm.Controls.StringControl;
    }

    interface Attributes
      extends Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> {
      get(attributename: "businesscard"): Xrm.Attributes.StringAttribute;
      get(attributename: "firstname"): Xrm.Attributes.StringAttribute;
      get(attributename: "lastname"): Xrm.Attributes.StringAttribute;
      get(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
      get(attributename: "parentcustomerid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "emailaddress1"): Xrm.Attributes.StringAttribute;
      get(attributename: "mobilephone"): Xrm.Attributes.StringAttribute;
      get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      get(attributename: "description"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_line1"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_line2"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_city"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_postalcode"): Xrm.Attributes.StringAttribute;
    }

    interface Data extends Xrm.Data {
      attributes: Attributes;
    }

    interface Ui extends Xrm.Ui {
      tabs: Tabs;
      controls: Controls;
    }

    interface Tabs extends Xrm.Collection.ItemCollection<Xrm.Controls.Tab> {
      get(tabname: "tab_1"): tab_1TabControl;
    }

    interface tab_1TabControl extends Xrm.Controls.Tab {
      sections: tab_1TabSections;
    }

    interface tab_1TabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(
        sectionname: "tab_1_column_1_section_1"
      ): tab_1_column_1_section_1SectionControl;
      get(
        sectionname: "tab_1_column_2_section_1"
      ): tab_1_column_2_section_1SectionControl;
      get(
        sectionname: "tab_1_column_3_section_1"
      ): tab_1_column_3_section_1SectionControl;
    }

    interface tab_1_column_1_section_1SectionControl
      extends Xrm.Controls.Section {
      controls: tab_1_column_1_section_1SectionControls;
    }
    interface tab_1_column_2_section_1SectionControl
      extends Xrm.Controls.Section {
      controls: tab_1_column_2_section_1SectionControls;
    }
    interface tab_1_column_3_section_1SectionControl
      extends Xrm.Controls.Section {
      controls: tab_1_column_3_section_1SectionControls;
    }

    interface tab_1_column_1_section_1SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "businesscard"): Xrm.Controls.StringControl;
      get(controlname: "firstname"): Xrm.Controls.StringControl;
      get(controlname: "lastname"): Xrm.Controls.StringControl;
      get(controlname: "jobtitle"): Xrm.Controls.StringControl;
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
    }
    interface tab_1_column_2_section_1SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "description"): Xrm.Controls.StringControl;
    }
    interface tab_1_column_3_section_1SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "address1_line1"): Xrm.Controls.StringControl;
      get(controlname: "address1_line2"): Xrm.Controls.StringControl;
      get(controlname: "address1_city"): Xrm.Controls.StringControl;
      get(controlname: "address1_postalcode"): Xrm.Controls.StringControl;
    }
  }
}
