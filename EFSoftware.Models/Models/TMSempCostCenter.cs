// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSempCostCenter : AuditableEntity<int>
    {
        public decimal Sn { get; set; }
        public string Empkey { get; set; }
        public DateTime DateEffective { get; set; }
        public DateTime DateModified { get; set; }
        public string UserModified { get; set; }
    }
}
