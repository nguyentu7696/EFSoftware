using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSAllowanceJobsite : AuditableEntity<int>
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Remarks { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal Amount { get; set; }
        public int CompanyId { get; set; }
        public int JobsiteId { get; set; }
        public int AllowanceCompanyId { get; set; }
    }
}
