using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSOtCode : AuditableEntity<int>
    {
        public int CompanyId { get; set; }

        public string PayrollCode { get; set; }

        public string Payroll { get; set; }

        public int Type { get; set; }

        public double Rate { get; set; }

        public Remarks Remarks { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public int Used { get; set; }
        public string JobsiteUsed { get; set; }

    }
}
