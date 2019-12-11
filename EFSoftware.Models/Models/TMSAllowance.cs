using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSAllowance : AuditableEntity<int>
    {
        public string Description { get; set; }
        public string Code { get; set; }
        public string Remarks { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal Amount { get; set; }
        public int CompanyId { get; set; }

        public int Used { get; set; }
        public string JobsiteUsed { get; set; }
    }
}
