// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSCostCenter : AuditableEntity<int>
    {
        public decimal SnCC { get; set; }
        public string Company { get; set; } 
        public DateTime EffectiveDateStart { get; set; }
        public DateTime EffectiveDateEnd { get; set; }

    }
}
