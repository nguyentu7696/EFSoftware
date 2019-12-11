using System;

namespace EFSoftware.Models.Models
{
    public class TMSRoster : AuditableEntity<int>
    {
        public int EmployeeId { get; set; }

        public DateTime Date { get; set; }

        public int OtCodeId { get; set; }

        public string OtCodeValue { get; set; }

        public string Remarks { get; set; }

        public int AttendanceId { get; set; }

        public int ShiftId { get; set; }

        public string StartTime { get; set; }

        public string EndTime { get; set; }

        public int Type { get; set; }

        public int Type1 { get; set; }

        public string StartTime1 { get; set; }

        public string EndTime1 { get; set; }

        public string Remarks1 { get; set; }

        public int Type2 { get; set; }

        public string StartTime2 { get; set; }

        public string EndTime2 { get; set; }

        public string Remarks2 { get; set; }

        public int Type3 { get; set; }

        public string StartTime3 { get; set; }

        public string EndTime3 { get; set; }

        public string Remarks3 { get; set; }
    }
}
