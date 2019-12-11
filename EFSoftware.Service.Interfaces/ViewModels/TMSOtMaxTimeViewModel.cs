using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSOtMaxTimeViewModel
    {
        public int Id { get; set; }

        public int JobSiteId { get; set; }

        public int WorkingHoursWeek { get; set; }

        public int OtHoursMonth { get; set; }
    }

    public class TMSOtMaxTimeCreateViewModel
    {
        public int JobSiteId { get; set; }

        public int WorkingHoursWeek { get; set; }

        public int OtHoursMonth { get; set; }
    }

    //public class TMSOtMaxTimeCreateViewModel
    //{
    //    [Required(ErrorMessage = "CompanyId is required")]
    //    public int CompanyId { get; set; }

    //    [Required(ErrorMessage = "PayrollCode is required")]
    //    public string PayrollCode { get; set; }

    //    [Required(ErrorMessage = "Payroll is required")]
    //    public string Payroll { get; set; }

    //    //[Required(ErrorMessage = "Type is required")]
    //    public int Type { get; set; }

    //    [Required(ErrorMessage = "Remarks is required")]
    //    public string Remarks { get; set; }

    //    public DateTime StartDate { get; set; }

    //    public DateTime EndDate { get; set; }
    //}
}
