// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSempRoster : AuditableEntity<int>
    {
        public decimal Sn { get; set; }
        public string Empkey { get; set; }
        public DateTime Date { get; set; }
        public decimal RosterCode { get; set; }
        public string Remarks { get; set; }
        public string OT { get; set; }
        public string Injection { get; set; }
        public string Training { get; set; }
        public string OTstartTime { get; set; }
        public string OTendTime { get; set; }
        public string OTrem { get; set; }
        public string INJstartTime { get; set; }
        public string INJendTime { get; set; }
        public string INJrem { get; set; }
        public string TRstartTime { get; set; }
        public string TRendTime { get; set; }
        public string TRrem { get; set; }
        public DateTime DateModified { get; set; }
        public string UserModified { get; set; }
    }
}
