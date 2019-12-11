using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSShiftJobSiteViewModel
    {
        public int Id { get; set; }

        public string MainCode { get; set; }

        public string SubCode { get; set; }

        public string StartHours { get; set; }

        public string EndHours { get; set; }

        public int Minutes { get; set; }

        public string StartMinutes { get; set; }

        public string EndMinutes { get; set; }

        public string Hours { get; set; }

        public DateTime PeriodDate { get; set; }

        public string Remarks { get; set; }

        public string Value { get; set; }

        public int Status { get; set; }

        public int ShiftId { get; set; }

        public int JobSiteId { get; set; }
    }

    public class TMSShiftJobSiteCreateViewModel
    {
        public string MainCode { get; set; }

        public string SubCode { get; set; }

        public string StartHours { get; set; }

        public string EndHours { get; set; }

        public int Minutes { get; set; }

        public string StartMinutes { get; set; }

        public string EndMinutes { get; set; }

        public string Hours { get; set; }

        public DateTime PeriodDate { get; set; }

        public string Remarks { get; set; }

        public string Value { get; set; }

        public int Status { get; set; }

        [Required(ErrorMessage = "ShiftId is required")]
        public int ShiftId { get; set; }

        public int JobSiteId { get; set; }
    }


    public class TMSShiftJobSiteViewModelV2
    {
        public int Id { get; set; }

        public string SubCode { get; set; }

        public string MainCode { get; set; }

        public string Remarks { get; set; }

        public string Value { get; set; }

        public string Status { get; set; }

    }
}
