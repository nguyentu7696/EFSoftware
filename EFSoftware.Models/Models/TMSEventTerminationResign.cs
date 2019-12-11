using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSEventTerminationResign : AuditableEntity<int>
    {
        public int EmployeeId { get; set; }

        public string EventType { get; set; }

        public DateTime EffectiveDate { get; set; }

        public int ResignReasonId { get; set; }

        public int ZoneLocationId { get; set; }

        public int Status { get; set; }

    }
}
