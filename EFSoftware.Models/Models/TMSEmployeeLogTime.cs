using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSEmployeeLogTime : AuditableEntity<int>
    {
        public string TimeIn { get; set; }

        public string TimeOut { get; set; }

        public DateTime DateLog { get; set; }

        public int EmployeeId { get; set; }

        public AttType AttType { get; set; }

        public NormalType NormalType { get; set; }

        public string WorkingHourse { get; set; }

        public string Remarks { get; set; }

        public int ShiftId { get; set; }

        public TypeCreate TypeCreate { get; set; }

        public bool UpdateManual { get; set; }
    }
}
