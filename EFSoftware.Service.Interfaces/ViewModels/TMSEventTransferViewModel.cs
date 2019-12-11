using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSEventTransferViewModel
    {
        public TMSEventTransferViewModel( int id, int employeeId, string eventType, DateTime periodStart, DateTime periodEnd, int zoneLocationId,
            int zoneId,
            int shiftId, string shiftKey, string subContractor, string recall, string remarks, bool eligibilityShift, bool eligibilityAllowance,
            int mealAllowanceId, string mealAllowanceValue, int monthlyShiftAllowanceId, string monthlyShiftAllowanceValue, bool eligibilityOt,
            int maxWorkingHours, int otPhId, string otPhValue, int otRdId, string otRdValue, int otOId, string otOValue, int otStdId,
            string otStdValue, int transportAllowanceId, string transportAllowanceValue,
            string zoneLocationName, int jobsiteId, string jobsiteName, int departmentId, string departmentName)
        {
            Id = id;
            EmployeeId = employeeId;
            EventType = eventType;
            PeriodStart = periodStart;
            PeriodEnd = periodEnd;
            ZoneLocationId = zoneLocationId;
            ZoneId = zoneId;
            ShiftId = shiftId;
            ShiftKey = shiftKey;
            SubContractor = subContractor;
            Recall = recall;
            Remarks = remarks;
            EligibilityShift = eligibilityShift;
            EligibilityAllowance = eligibilityAllowance;
            MealAllowanceId = mealAllowanceId;
            MealAllowanceValue = mealAllowanceValue;
            MonthlyShiftAllowanceId = monthlyShiftAllowanceId;
            MonthlyShiftAllowanceValue = monthlyShiftAllowanceValue;
            EligibilityOt = eligibilityOt;
            MaxWorkingHours = maxWorkingHours;
            OtPhId = otPhId;
            OtPhValue = otPhValue;
            OtRdId = otRdId;
            OtRdValue = otRdValue;
            OtOId = otOId;
            OtOValue = otOValue;
            OtStdId = otStdId;
            OtStdValue = otStdValue;
            TransportAllowanceId = transportAllowanceId;
            TransportAllowanceValue = transportAllowanceValue;
            ZoneLocationName = zoneLocationName;
            JobSiteId = jobsiteId;
            JobSiteName = jobsiteName;
            DepartmentId = departmentId;
            DepartmentName = departmentName;
        }

        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public string EventType { get; set; }
        public DateTime PeriodStart { get; set; }
        public DateTime PeriodEnd { get; set; }
        public int ZoneLocationId { get; set; }
        public int ZoneId { get; set; }
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

        public string ZoneLocationName { get; set; }

        public int JobSiteId { get; set; }

        public string JobSiteName { get; set; }

        public int DepartmentId { get; set; }

        public string DepartmentName { get; set; }
    }

    public class TMSEventTransferCreateViewModel
    {
        public int EmployeeId { get; set; }

        [Required(ErrorMessage = "EventType is required")]
        public string EventType { get; set; }

        public DateTime PeriodStart { get; set; }

        public DateTime PeriodEnd { get; set; }
        public int ZoneLocationId { get; set; }

        public int ZoneId { get; set; }

        [Required(ErrorMessage = "ShiftId is required")]
        public int ShiftId { get; set; }

        public string ShiftKey { get; set; }
        public string SubTransferor { get; set; }
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
    }

}
