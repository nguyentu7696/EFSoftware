using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSJobSite : AuditableEntity<int>
    {
        public string Name { get; set; }
        public int ZoneId { get; set; }
        public int Level { get; set; }
        public string Area { get; set; }
        public string Location { get; set; }
        public int DepartmentId { get; set; }
        public int SiteId { get; set; }
        public int CompanyId { get; set; }
    }
}
