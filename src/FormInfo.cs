using System.Linq;

namespace XrmTypesGen
{
    public class FormInfo
    {
        //public FieldInfo[] Fields { get; set; }
        public TabInfo[] Tabs { get; set; }
        public string FormName { get; set; }
        public string FormId { get; set; }
        public string FormType { get; set; }
        public string EntityName { get; set; }
    }

    public class TabInfo
    {
        public string Name { get; set; }
        public SectionInfo[] Sections { get; set; }
    }

    public class SectionInfo
    {
        public string Name { get; set; }
        public FieldInfo[] Fields { get; set; }
    }

    public class FieldInfo
    {
        public FieldInfo(string name, string classid)
        {
            Name = name;
            ClassId = classid;
        }
        public string Name { get; set; }
        public string ClassId { get; set; }
        public string FieldType { get { return GetFieldType(ClassId); } }
        public enum ObjectType { Control, Attribute }
        public string GetXrmType(string fieldtype, ObjectType objecttype)
        {
            var xrmtypes = new[] {
                //new { ControlType = null, AttributeType = null, FieldTypes = new string[] {"",""}}
                new { ControlType = "", AttributeType = "", FieldTypes = new string[] {"CustomControl","ActivitiesContainerControl"}},
                new { ControlType = "Xrm.Controls.StringControl", AttributeType = "Xrm.Attributes.StringAttribute", FieldTypes = new string[] {"TextBoxControl",""}}
            };

            var xrmtype = xrmtypes.Where(t => t.FieldTypes.Contains(FieldType)).FirstOrDefault();
            return (xrmtype != null
                    ? objecttype == ObjectType.Attribute
                        ? xrmtype.AttributeType
                        : xrmtype.ControlType
                    : objecttype == ObjectType.Attribute
                        ? "Xrm.Attributes.Attribute"
                        : "Xrm.Controls.Control");
        }

        private string GetFieldType(string classid)
        {
            /** classid details: https://docs.microsoft.com/en-us/previous-versions/dynamicscrm-2016/developers-guide/gg334472(v=crm.8)#remarks

            | Name                                  | GUID                                 |
            |---------------------------------------|--------------------------------------|
            |AccessPrivilegeControl                 |{F93A31B2-99AC-4084-8EC2-D4027C31369A}|
            |AccessTeamEntityPicker                 |{3F4E2A56-F102-4B4D-AB9C-F1574CA5BFDA}|
            |ActivitiesContainerControl             |{C72511AB-84E5-4FB7-A543-25B4FC01E83E}|
            |ActivitiesWallControl                  |{6636847D-B74D-4994-B55A-A6FAF97ECEA2}|
            |ArticleContentControl                  |{F02EF977-2564-4B9A-B2F0-DF083D8A019B}|
            |ButtonControl                          |{00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20}|
            |CheckBoxControl                        |{B0C6723A-8503-4FD7-BB28-C8A06AC933C2}|
            |CompositionLinkControl                 |{DB1284EF-9FFC-4E99-B382-0CC082FE2364}|
            |ConnectionControl                      |{3246F906-1F71-45F7-B11F-D7BE0F9D04C9}|
            |ConnectionRoleObjectTypeListControl    |{821ACF1A-7E46-4A0C-965D-FE14A57D78C7}|
            |CoverPagePicklistControl               |{4168A05C-D857-46AF-8457-5BB47EB04EA1}|
            |CustomControl                          |{F9A8A302-114E-466A-B582-6771B2AE0D92}|
            |DateTimeControl                        |{5B773807-9FB2-42DB-97C3-7A91EFF8ADFF}|
            |DecimalControl                         |{C3EFE0C3-0EC6-42BE-8349-CBD9079DFD8E}|
            |DurationControl                        |{AA987274-CE4E-4271-A803-66164311A958}|
            |DynamicPropertyListControl             |{6896F004-B17A-4202-861E-8B7EA2080E0B}|
            |EmailAddressControl                    |{ADA2203E-B4CD-49BE-9DDF-234642B43B52}|
            |EmailBodyControl                       |{6F3FB987-393B-4D2D-859F-9D0F0349B6AD}|
            |ErrorStatusControl                     |{F4C16ECA-CA81-4E39-9448-834B8378721E}|
            |FloatControl                           |{0D2C745A-E5A8-4C8F-BA63-C6D3BB604660}|
            |FrameControl                           |{FD2A7985-3187-444E-908D-6624B21F69C0}|
            |GridControl                            |{E7A81278-8635-4D9E-8D4D-59480B391C5B}|
            |HiddenInputControl                     |{5546E6CD-394C-4BEE-94A8-4425E17EF6C6}|
            |IntegerControl                         |{C6D124CA-7EDA-4A60-AEA9-7FB8D318B68F}|
            |KBViewerControl                        |{A62B6FA9-169E-406C-B1AA-EAB828CB6026}|
            |LabelControl                           |{5635c4df-1453-413e-b213-e81b65411150}|
            |LanguagePicker                         |{671A9387-CA5A-4D1E-8AB7-06E39DDCF6B5}|
            |LinkControl                            |{DFDF1CDE-837B-4AC9-98CF-AC74361FD89D}|
            |LookupControl                          |{270BD3DB-D9AF-4782-9025-509E298DEC0A}|
            |MailMergeLanguagePicker                |{B634828E-C390-444A-AFE6-E07315D9D970}|
            |MapLinkControl                         |{91DC0675-C8B9-4421-B1E0-261CEBF02BAC}|
            |MapsControl                            |{62B0DF79-0464-470F-8AF7-4483CFEA0C7D}|
            |MoneyControl                           |{533B9E00-756B-4312-95A0-DC888637AC78}|
            |NotesControl                           |{06375649-C143-495E-A496-C962E5B4488E}|
            |PartyListControl                       |{CBFB742C-14E7-4A17-96BB-1A13F7F64AA2}|
            |PhoneNumberControl                     |{8C10015A-B339-4982-9474-A95FE05631A5}|
            |PicklistControl                        |{3EF39988-22BB-4F0B-BBBE-64B5A3748AEE}|
            |PicklistLookupControl                  |{2305E33A-BAD3-4022-9E15-1856CF218333}|
            |PicklistStatusControl                  |{5D68B988-0661-4DB2-BC3E-17598AD3BE6C}|
            |ProcessControl                         |{06E9F7AF-1F54-4681-8EEC-1E21A1CEB465}|
            |QuickFormCollectionControl             |{5C5600E0-1D6E-4205-A272-BE80DA87FD42}|
            |QuickFormControl                       |{69AF7DCA-2E3B-4EE7-9201-0DA731DD2413}|
            |RadioControl                           |{67FAC785-CD58-4F9F-ABB3-4B7DDC6ED5ED}|
            |RegardingControl                       |{F3015350-44A2-4AA0-97B5-00166532B5E9}|
            |RelatedInformationControl              |{163B90A6-EB64-49D2-9DF8-3C84A4F0A0F8}|
            |RelationshipRolePicklist               |{5F986642-5961-4D9F-AB5E-643D71E231E9}|
            |ReportControl                          |{A28F441B-916C-4865-87FD-0C5D53BD59C9}|
            |SearchWidget                           |{E616A57F-20E0-4534-8662-A101B5DDF4E0}|
            |SocialInsightControl                   |{86B9E25E-695E-4FEF-AC69-F05CFA96739C}|
            |TextAreaControl                        |{E0DECE4B-6FC8-4A8F-A065-082708572369}|
            |TextBoxControl                         |{4273EDBD-AC1D-40D3-9FB2-095C621B552D}|
            |TickerControl                          |{1E1FC551-F7A8-43AF-AC34-A8DC35C7B6D4}|
            |TimerControl                           |{9C5CA0A1-AB4D-4781-BE7E-8DFBE867B87E}|
            |TimeZonePicklistControl                |{7C624A0B-F59E-493D-9583-638D34759266}|
            |UrlControl                             |{71716B6C-711E-476C-8AB8-5D11542BFB47}|
            |WebResourceHtmlControl                 |{9FDF5F91-88B1-47F4-AD53-C11EFC01A01D}|
            |WebResourceImageControl                |{587CDF98-C1D5-4BDE-8473-14A0BC7644A7}|
            |WebResourceSilverlightControl          |{080677DB-86EC-4544-AC42-F927E74B491F}|

            **/

            var controltypes = new[] {
                new { Name = "AccessPrivilegeControl" , ClassId = "{F93A31B2-99AC-4084-8EC2-D4027C31369A}" },
                new { Name = "AccessTeamEntityPicker" , ClassId = "{3F4E2A56-F102-4B4D-AB9C-F1574CA5BFDA}" },
                new { Name = "ActivitiesContainerControl" , ClassId = "{C72511AB-84E5-4FB7-A543-25B4FC01E83E}" },
                new { Name = "ActivitiesWallControl" , ClassId = "{6636847D-B74D-4994-B55A-A6FAF97ECEA2}" },
                new { Name = "ArticleContentControl" , ClassId = "{F02EF977-2564-4B9A-B2F0-DF083D8A019B}" },
                new { Name = "ButtonControl" , ClassId = "{00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20}" },
                new { Name = "CheckBoxControl" , ClassId = "{B0C6723A-8503-4FD7-BB28-C8A06AC933C2}" },
                new { Name = "CompositionLinkControl" , ClassId = "{DB1284EF-9FFC-4E99-B382-0CC082FE2364}" },
                new { Name = "ConnectionControl" , ClassId = "{3246F906-1F71-45F7-B11F-D7BE0F9D04C9}" },
                new { Name = "ConnectionRoleObjectTypeListControl" , ClassId = "{821ACF1A-7E46-4A0C-965D-FE14A57D78C7}" },
                new { Name = "CoverPagePicklistControl" , ClassId = "{4168A05C-D857-46AF-8457-5BB47EB04EA1}" },
                new { Name = "CustomControl" , ClassId = "{F9A8A302-114E-466A-B582-6771B2AE0D92}" },
                new { Name = "DateTimeControl" , ClassId = "{5B773807-9FB2-42DB-97C3-7A91EFF8ADFF}" },
                new { Name = "DecimalControl" , ClassId = "{C3EFE0C3-0EC6-42BE-8349-CBD9079DFD8E}" },
                new { Name = "DurationControl" , ClassId = "{AA987274-CE4E-4271-A803-66164311A958}" },
                new { Name = "DynamicPropertyListControl" , ClassId = "{6896F004-B17A-4202-861E-8B7EA2080E0B}" },
                new { Name = "EmailAddressControl" , ClassId = "{ADA2203E-B4CD-49BE-9DDF-234642B43B52}" },
                new { Name = "EmailBodyControl" , ClassId = "{6F3FB987-393B-4D2D-859F-9D0F0349B6AD}" },
                new { Name = "ErrorStatusControl" , ClassId = "{F4C16ECA-CA81-4E39-9448-834B8378721E}" },
                new { Name = "FloatControl" , ClassId = "{0D2C745A-E5A8-4C8F-BA63-C6D3BB604660}" },
                new { Name = "FrameControl" , ClassId = "{FD2A7985-3187-444E-908D-6624B21F69C0}" },
                new { Name = "GridControl" , ClassId = "{E7A81278-8635-4D9E-8D4D-59480B391C5B}" },
                new { Name = "HiddenInputControl" , ClassId = "{5546E6CD-394C-4BEE-94A8-4425E17EF6C6}" },
                new { Name = "IntegerControl" , ClassId = "{C6D124CA-7EDA-4A60-AEA9-7FB8D318B68F}" },
                new { Name = "KBViewerControl" , ClassId = "{A62B6FA9-169E-406C-B1AA-EAB828CB6026}" },
                new { Name = "LabelControl" , ClassId = "{5635c4df-1453-413e-b213-e81b65411150}" },
                new { Name = "LanguagePicker" , ClassId = "{671A9387-CA5A-4D1E-8AB7-06E39DDCF6B5}" },
                new { Name = "LinkControl" , ClassId = "{DFDF1CDE-837B-4AC9-98CF-AC74361FD89D}" },
                new { Name = "LookupControl" , ClassId = "{270BD3DB-D9AF-4782-9025-509E298DEC0A}" },
                new { Name = "MailMergeLanguagePicker" , ClassId = "{B634828E-C390-444A-AFE6-E07315D9D970}" },
                new { Name = "MapLinkControl" , ClassId = "{91DC0675-C8B9-4421-B1E0-261CEBF02BAC}" },
                new { Name = "MapsControl" , ClassId = "{62B0DF79-0464-470F-8AF7-4483CFEA0C7D}" },
                new { Name = "MoneyControl" , ClassId = "{533B9E00-756B-4312-95A0-DC888637AC78}" },
                new { Name = "NotesControl" , ClassId = "{06375649-C143-495E-A496-C962E5B4488E}" },
                new { Name = "PartyListControl" , ClassId = "{CBFB742C-14E7-4A17-96BB-1A13F7F64AA2}" },
                new { Name = "PhoneNumberControl" , ClassId = "{8C10015A-B339-4982-9474-A95FE05631A5}" },
                new { Name = "PicklistControl" , ClassId = "{3EF39988-22BB-4F0B-BBBE-64B5A3748AEE}" },
                new { Name = "PicklistLookupControl" , ClassId = "{2305E33A-BAD3-4022-9E15-1856CF218333}" },
                new { Name = "PicklistStatusControl" , ClassId = "{5D68B988-0661-4DB2-BC3E-17598AD3BE6C}" },
                new { Name = "ProcessControl" , ClassId = "{06E9F7AF-1F54-4681-8EEC-1E21A1CEB465}" },
                new { Name = "QuickFormCollectionControl" , ClassId = "{5C5600E0-1D6E-4205-A272-BE80DA87FD42}" },
                new { Name = "QuickFormControl" , ClassId = "{69AF7DCA-2E3B-4EE7-9201-0DA731DD2413}" },
                new { Name = "RadioControl" , ClassId = "{67FAC785-CD58-4F9F-ABB3-4B7DDC6ED5ED}" },
                new { Name = "RegardingControl" , ClassId = "{F3015350-44A2-4AA0-97B5-00166532B5E9}" },
                new { Name = "RelatedInformationControl" , ClassId = "{163B90A6-EB64-49D2-9DF8-3C84A4F0A0F8}" },
                new { Name = "RelationshipRolePicklist" , ClassId = "{5F986642-5961-4D9F-AB5E-643D71E231E9}" },
                new { Name = "ReportControl" , ClassId = "{A28F441B-916C-4865-87FD-0C5D53BD59C9}" },
                new { Name = "SearchWidget" , ClassId = "{E616A57F-20E0-4534-8662-A101B5DDF4E0}" },
                new { Name = "SocialInsightControl" , ClassId = "{86B9E25E-695E-4FEF-AC69-F05CFA96739C}" },
                new { Name = "TextAreaControl" , ClassId = "{E0DECE4B-6FC8-4A8F-A065-082708572369}" },
                new { Name = "TextBoxControl" , ClassId = "{4273EDBD-AC1D-40D3-9FB2-095C621B552D}" },
                new { Name = "TickerControl" , ClassId = "{1E1FC551-F7A8-43AF-AC34-A8DC35C7B6D4}" },
                new { Name = "TimerControl" , ClassId = "{9C5CA0A1-AB4D-4781-BE7E-8DFBE867B87E}" },
                new { Name = "TimeZonePicklistControl" , ClassId = "{7C624A0B-F59E-493D-9583-638D34759266}" },
                new { Name = "UrlControl" , ClassId = "{71716B6C-711E-476C-8AB8-5D11542BFB47}" },
                new { Name = "WebResourceHtmlControl" , ClassId = "{9FDF5F91-88B1-47F4-AD53-C11EFC01A01D}" },
                new { Name = "WebResourceImageControl" , ClassId = "{587CDF98-C1D5-4BDE-8473-14A0BC7644A7}" },
                new { Name = "WebResourceSilverlightControl" , ClassId = "{080677DB-86EC-4544-AC42-F927E74B491F}" },
            };

            var controltype = controltypes.Where(c => c.ClassId.ToLower() == classid.ToLower());
            return controltype.Count() > 0 ? controltype.FirstOrDefault().Name : null;
        }
    }
}