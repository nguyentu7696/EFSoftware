using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSResignReason : AuditableEntity<int>
    {
        public string Name { get; set; }
        public int CompanyId { get; set; }
        public string Code { get; set; }
        public string Remarks { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public int Status { get; set; }
    }
}
