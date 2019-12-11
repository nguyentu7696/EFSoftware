using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSEventTerminationResignViewModel
    {
        public int Id { get; set; }

        public int EmployeeId { get; set; }

        public string EventType { get; set; }

        public DateTime EffectiveDate { get; set; }

        public int ResignReasonId { get; set; }

        public int ZoneLocationId { get; set; }

        public int Status { get; set; }
    }

    public class TMSEventCreateTRViewModel
    {
        public int EmployeeId { get; set; }

        public string EventType { get; set; }

        public DateTime EffectiveDate { get; set; }

        public int ResignReasonId { get; set; }

        public int ZoneLocationId { get; set; }

        public int Status { get; set; }
    }
}
