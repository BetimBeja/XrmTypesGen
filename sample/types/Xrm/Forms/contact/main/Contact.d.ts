// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.contact.main.Contact {
    type Form = FormContext;
    interface FormContext extends Xrm.FormContext {
      //#region form context attributes
      getAttribute(attributename: "fullname"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "parentcustomerid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "emailaddress1"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "mobilephone"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "fax"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "preferredcontactmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "address1_composite"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "businesscard"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "parentcustomerid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "parentcustomerid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "gendercode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "familystatuscode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "spousesname"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "birthdate"): Xrm.Attributes.DateAttribute;
      getAttribute(attributename: "anniversary"): Xrm.Attributes.DateAttribute;
      getAttribute(
        attributename: "description"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "originatingleadid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "lastusedincampaign"
      ): Xrm.Attributes.DateAttribute;
      getAttribute(
        attributename: "donotsendmm"
      ): Xrm.Attributes.BooleanAttribute;
      getAttribute(
        attributename: "preferredcontactmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "donotemail"
      ): Xrm.Attributes.BooleanAttribute;
      getAttribute(
        attributename: "followemail"
      ): Xrm.Attributes.BooleanAttribute;
      getAttribute(
        attributename: "donotbulkemail"
      ): Xrm.Attributes.BooleanAttribute;
      getAttribute(
        attributename: "donotphone"
      ): Xrm.Attributes.BooleanAttribute;
      getAttribute(attributename: "donotfax"): Xrm.Attributes.BooleanAttribute;
      getAttribute(
        attributename: "donotpostalmail"
      ): Xrm.Attributes.BooleanAttribute;
      getAttribute(
        attributename: "transactioncurrencyid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "creditlimit"
      ): Xrm.Attributes.NumberAttribute;
      getAttribute(
        attributename: "creditonhold"
      ): Xrm.Attributes.BooleanAttribute;
      getAttribute(
        attributename: "paymenttermscode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "address1_shippingmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "address1_freighttermscode"
      ): Xrm.Attributes.OptionSetAttribute;
      //#endregion
      //#region form context contols
      getControl(controlname: "fullname"): Xrm.Controls.StringControl;
      getControl(controlname: "jobtitle"): Xrm.Controls.StringControl;
      getControl(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      getControl(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      getControl(controlname: "telephone1"): Xrm.Controls.StringControl;
      getControl(controlname: "mobilephone"): Xrm.Controls.StringControl;
      getControl(controlname: "fax"): Xrm.Controls.StringControl;
      getControl(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "address1_composite"): Xrm.Controls.StringControl;
      getControl(
        controlname: "mapcontrol"
      ): Xrm.Controls.Control /*classid: 62b0df79-0464-470f-8af7-4483cfea0c7d*/;
      getControl(controlname: "businesscard"): Xrm.Controls.StringControl;
      getControl(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
      getControl(
        controlname: "TalkingPoints"
      ): Xrm.Controls.Control /*classid: f9a8a302-114e-466a-b582-6771b2ae0d92*/;
      getControl(
        controlname: "ActionCards"
      ): Xrm.Controls.Control /*classid: f9a8a302-114e-466a-b582-6771b2ae0d92*/;
      getControl(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      getControl(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      getControl(
        controlname: "contactopportunitiesgrid"
      ): Xrm.Controls.GridControl;
      getControl(controlname: "contactcasessgrid"): Xrm.Controls.GridControl;
      getControl(controlname: "subgrid_Entitlement"): Xrm.Controls.GridControl;
      getControl(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "familystatuscode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "spousesname"): Xrm.Controls.StringControl;
      getControl(controlname: "birthdate"): Xrm.Controls.DateControl;
      getControl(controlname: "anniversary"): Xrm.Controls.DateControl;
      getControl(controlname: "description"): Xrm.Controls.StringControl;
      getControl(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
      getControl(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      getControl(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "followemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "transactioncurrencyid"
      ): Xrm.Controls.LookupControl;
      getControl(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      getControl(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "paymenttermscode"
      ): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "address1_shippingmethodcode"
      ): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "address1_freighttermscode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "DocumentsSubGrid"): Xrm.Controls.GridControl;
      //#endregion

      data: Data;
      ui: Ui;
    }

    interface Controls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "fullname"): Xrm.Controls.StringControl;
      get(controlname: "jobtitle"): Xrm.Controls.StringControl;
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "fax"): Xrm.Controls.StringControl;
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "address1_composite"): Xrm.Controls.StringControl;
      get(
        controlname: "mapcontrol"
      ): Xrm.Controls.Control /*classid: 62b0df79-0464-470f-8af7-4483cfea0c7d*/;
      get(controlname: "businesscard"): Xrm.Controls.StringControl;
      get(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
      get(
        controlname: "TalkingPoints"
      ): Xrm.Controls.Control /*classid: f9a8a302-114e-466a-b582-6771b2ae0d92*/;
      get(
        controlname: "ActionCards"
      ): Xrm.Controls.Control /*classid: f9a8a302-114e-466a-b582-6771b2ae0d92*/;
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      get(controlname: "contactopportunitiesgrid"): Xrm.Controls.GridControl;
      get(controlname: "contactcasessgrid"): Xrm.Controls.GridControl;
      get(controlname: "subgrid_Entitlement"): Xrm.Controls.GridControl;
      get(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
      get(controlname: "familystatuscode"): Xrm.Controls.OptionSetControl;
      get(controlname: "spousesname"): Xrm.Controls.StringControl;
      get(controlname: "birthdate"): Xrm.Controls.DateControl;
      get(controlname: "anniversary"): Xrm.Controls.DateControl;
      get(controlname: "description"): Xrm.Controls.StringControl;
      get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
      get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
      get(controlname: "paymenttermscode"): Xrm.Controls.OptionSetControl;
      get(
        controlname: "address1_shippingmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(
        controlname: "address1_freighttermscode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "DocumentsSubGrid"): Xrm.Controls.GridControl;
    }

    interface Attributes
      extends Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> {
      get(attributename: "fullname"): Xrm.Attributes.StringAttribute;
      get(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
      get(attributename: "parentcustomerid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "emailaddress1"): Xrm.Attributes.StringAttribute;
      get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      get(attributename: "mobilephone"): Xrm.Attributes.StringAttribute;
      get(attributename: "fax"): Xrm.Attributes.StringAttribute;
      get(
        attributename: "preferredcontactmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "address1_composite"): Xrm.Attributes.StringAttribute;
      get(attributename: "businesscard"): Xrm.Attributes.StringAttribute;
      get(attributename: "parentcustomerid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "parentcustomerid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "gendercode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "familystatuscode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "spousesname"): Xrm.Attributes.StringAttribute;
      get(attributename: "birthdate"): Xrm.Attributes.DateAttribute;
      get(attributename: "anniversary"): Xrm.Attributes.DateAttribute;
      get(attributename: "description"): Xrm.Attributes.StringAttribute;
      get(attributename: "originatingleadid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
      get(attributename: "donotsendmm"): Xrm.Attributes.BooleanAttribute;
      get(
        attributename: "preferredcontactmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "donotemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "followemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotbulkemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotphone"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotfax"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotpostalmail"): Xrm.Attributes.BooleanAttribute;
      get(
        attributename: "transactioncurrencyid"
      ): Xrm.Attributes.LookupAttribute;
      get(attributename: "creditlimit"): Xrm.Attributes.NumberAttribute;
      get(attributename: "creditonhold"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "paymenttermscode"): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "address1_shippingmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "address1_freighttermscode"
      ): Xrm.Attributes.OptionSetAttribute;
    }

    interface Data extends Xrm.Data {
      attributes: Attributes;
    }

    interface Ui extends Xrm.Ui {
      tabs: Tabs;
      controls: Controls;
    }

    interface Tabs extends Xrm.Collection.ItemCollection<Xrm.Controls.Tab> {
      get(tabname: "SUMMARY_TAB"): SUMMARY_TABTabControl;
      get(tabname: "DETAILS_TAB"): DETAILS_TABTabControl;
      get(tabname: "documents_sharepoint"): documents_sharepointTabControl;
    }

    interface SUMMARY_TABTabControl extends Xrm.Controls.Tab {
      sections: SUMMARY_TABTabSections;
    }
    interface DETAILS_TABTabControl extends Xrm.Controls.Tab {
      sections: DETAILS_TABTabSections;
    }
    interface documents_sharepointTabControl extends Xrm.Controls.Tab {
      sections: documents_sharepointTabSections;
    }

    interface SUMMARY_TABTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(
        sectionname: "CONTACT_INFORMATION"
      ): CONTACT_INFORMATIONSectionControl;
      get(sectionname: "MapSection"): MapSectionSectionControl;
      get(sectionname: "BusinessCard"): BusinessCardSectionControl;
      get(sectionname: "SOCIAL_PANE_TAB"): SOCIAL_PANE_TABSectionControl;
      get(
        sectionname: "TalkingPoints_section"
      ): TalkingPoints_sectionSectionControl;
      get(sectionname: "Summary_section_6"): Summary_section_6SectionControl;
      get(
        sectionname: "CUSTOMER_DETAILS_TAB"
      ): CUSTOMER_DETAILS_TABSectionControl;
    }
    interface DETAILS_TABTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(
        sectionname: "PERSONAL INFORMATION"
      ): PERSONALINFORMATIONSectionControl;
      get(
        sectionname: "PERSONAL_NOTES_SECTION"
      ): PERSONAL_NOTES_SECTIONSectionControl;
      get(
        sectionname: "marketing information"
      ): marketinginformationSectionControl;
      get(
        sectionname: "CONTACT_PREFERENCES"
      ): CONTACT_PREFERENCESSectionControl;
      get(sectionname: "billing information"): billinginformationSectionControl;
      get(
        sectionname: "shipping information"
      ): shippinginformationSectionControl;
    }
    interface documents_sharepointTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(
        sectionname: "documents_sharepoint_section"
      ): documents_sharepoint_sectionSectionControl;
    }

    interface CONTACT_INFORMATIONSectionControl extends Xrm.Controls.Section {
      controls: CONTACT_INFORMATIONSectionControls;
    }
    interface MapSectionSectionControl extends Xrm.Controls.Section {
      controls: MapSectionSectionControls;
    }
    interface BusinessCardSectionControl extends Xrm.Controls.Section {
      controls: BusinessCardSectionControls;
    }
    interface SOCIAL_PANE_TABSectionControl extends Xrm.Controls.Section {
      controls: SOCIAL_PANE_TABSectionControls;
    }
    interface TalkingPoints_sectionSectionControl extends Xrm.Controls.Section {
      controls: TalkingPoints_sectionSectionControls;
    }
    interface Summary_section_6SectionControl extends Xrm.Controls.Section {
      controls: Summary_section_6SectionControls;
    }
    interface CUSTOMER_DETAILS_TABSectionControl extends Xrm.Controls.Section {
      controls: CUSTOMER_DETAILS_TABSectionControls;
    }
    interface PERSONALINFORMATIONSectionControl extends Xrm.Controls.Section {
      controls: PERSONALINFORMATIONSectionControls;
    }
    interface PERSONAL_NOTES_SECTIONSectionControl
      extends Xrm.Controls.Section {
      controls: PERSONAL_NOTES_SECTIONSectionControls;
    }
    interface marketinginformationSectionControl extends Xrm.Controls.Section {
      controls: marketinginformationSectionControls;
    }
    interface CONTACT_PREFERENCESSectionControl extends Xrm.Controls.Section {
      controls: CONTACT_PREFERENCESSectionControls;
    }
    interface billinginformationSectionControl extends Xrm.Controls.Section {
      controls: billinginformationSectionControls;
    }
    interface shippinginformationSectionControl extends Xrm.Controls.Section {
      controls: shippinginformationSectionControls;
    }
    interface documents_sharepoint_sectionSectionControl
      extends Xrm.Controls.Section {
      controls: documents_sharepoint_sectionSectionControls;
    }

    interface CONTACT_INFORMATIONSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "fullname"): Xrm.Controls.StringControl;
      get(controlname: "jobtitle"): Xrm.Controls.StringControl;
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "fax"): Xrm.Controls.StringControl;
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "address1_composite"): Xrm.Controls.StringControl;
    }
    interface MapSectionSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "mapcontrol"
      ): Xrm.Controls.Control /*classid: 62b0df79-0464-470f-8af7-4483cfea0c7d*/;
    }
    interface BusinessCardSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "businesscard"): Xrm.Controls.StringControl;
    }
    interface SOCIAL_PANE_TABSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
    }
    interface TalkingPoints_sectionSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "TalkingPoints"
      ): Xrm.Controls.Control /*classid: f9a8a302-114e-466a-b582-6771b2ae0d92*/;
    }
    interface Summary_section_6SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "ActionCards"
      ): Xrm.Controls.Control /*classid: f9a8a302-114e-466a-b582-6771b2ae0d92*/;
    }
    interface CUSTOMER_DETAILS_TABSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      get(controlname: "contactopportunitiesgrid"): Xrm.Controls.GridControl;
      get(controlname: "contactcasessgrid"): Xrm.Controls.GridControl;
      get(controlname: "subgrid_Entitlement"): Xrm.Controls.GridControl;
    }
    interface PERSONALINFORMATIONSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
      get(controlname: "familystatuscode"): Xrm.Controls.OptionSetControl;
      get(controlname: "spousesname"): Xrm.Controls.StringControl;
      get(controlname: "birthdate"): Xrm.Controls.DateControl;
      get(controlname: "anniversary"): Xrm.Controls.DateControl;
    }
    interface PERSONAL_NOTES_SECTIONSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "description"): Xrm.Controls.StringControl;
    }
    interface marketinginformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
      get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
    }
    interface CONTACT_PREFERENCESSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
    }
    interface billinginformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
      get(controlname: "paymenttermscode"): Xrm.Controls.OptionSetControl;
    }
    interface shippinginformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "address1_shippingmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(
        controlname: "address1_freighttermscode"
      ): Xrm.Controls.OptionSetControl;
    }
    interface documents_sharepoint_sectionSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "DocumentsSubGrid"): Xrm.Controls.GridControl;
    }
  }
}
