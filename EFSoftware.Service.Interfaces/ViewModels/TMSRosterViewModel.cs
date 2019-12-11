using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSRosterViewModel
    {
        public int Id { get; set; }
        public int Day { get; set; }

        public int Month { get; set; }

        public int Year { get; set; }

        public string DayOfWeek { get; set; }

        public int EmployeeId { get; set; }

        public string Date { get; set; }

        public int OtCodeId { get; set; }

        public string OtCodeName { get; set; }

        public string OtCodeValue { get; set; }

        public int OtCodeValueId { get; set; }

        public string Remarks { get; set; }

        public string RemarksSplit { get; set; }

        public int AttendanceId { get; set; }

        public string AttendanceName { get; set; }

        public int ShiftId { get; set; }

        public string ShiftCodeName { get; set; }

        public string StartTime { get; set; }

        public string EndTime { get; set; }

        public int Type { get; set; }

        public string TypeName { get; set; }

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

    public class RosterData
    {
        public int Month { get; set; }

        public string MonthStr { get; set; }

        public List<TMSRosterViewModel> ListRoster { get; set; }
    }

    public class DuplicateModel
    {
        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public DateTime ToStartDate { get; set; }

        public DateTime ToEndDate { get; set; }

        public int EmployeeId { get; set; }
    }
}
