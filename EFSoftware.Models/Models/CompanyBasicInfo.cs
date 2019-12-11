using EFSoftware.Models.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models
{
    public class CompanyBasicInfo : AuditableEntity<int>
    {
        public string Name { get; set; }
        public string EmailAddress { get; set; }
        public string Address { get; set; }
        public string PICHandphone { get; set; }
        public int Status { get; set; }
        public string Logo { get; set; }

        public string Department { get; set; }

        public string Site { get; set; }
        public string JobSite { get; set; }
        public string Zone { get; set; }
        public string Level { get; set; }
        public string Area { get; set; }
        public string Location { get; set; }
    }
}
