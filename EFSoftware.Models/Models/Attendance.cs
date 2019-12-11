// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class Attendance : AuditableEntity<int>
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Value { get; set; }
        public int Used { get; set; }
        public string CompanyUsed { get; set; }
        public int Status { get; set; }
    }
}
