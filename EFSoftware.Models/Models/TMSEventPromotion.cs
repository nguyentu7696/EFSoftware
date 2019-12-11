using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSEventPromotion : AuditableEntity<int>
    {
        public int EmployeeId { get; set; }

        public string EventType { get; set; }

        public DateTime EffectiveDate { get; set; }

        public string Designation { get; set; }

        public string DesignationType { get; set; }

        public string EmployeeType { get; set; }

        public int ZoneLocationId { get; set; }

        public int ShiftId { get; set; }

        public string ShiftKey { get; set; }

        public string SubContractor { get; set; }

        public string Recall { get; set; }

        public string Remarks { get; set; }

        public bool EligibilityShift { get; set; }

        public bool EligibilityAllowance { get; set; }

        public int MealAllowanceId { get; set; }

        public string MealAllowanceValue { get; set; }

        public int MonthlyShiftAllowanceId { get; set; }

        public string MonthlyShiftAllowanceValue { get; set; }

        public bool EligibilityOt { get; set; }

        public int MaxWorkingHours { get; set; }

        public int OtPhId { get; set; }

        public string OtPhValue { get; set; }

        public int OtRdId { get; set; }

        public string OtRdValue { get; set; }

        public int OtOId { get; set; }

        public string OtOValue { get; set; }

        public int OtStdId { get; set; }

        public string OtStdValue { get; set; }

        public int TransportAllowanceId { get; set; }

        public string TransportAllowanceValue { get; set; }

        public int Status { get; set; }
    }
}
