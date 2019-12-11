using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSOtSettingViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "PayrollCode is required")]
        public string PayrollCode { get; set; }

        [Required(ErrorMessage = "Payroll is required")]
        public string Payroll { get; set; }

        [Required(ErrorMessage = "Type is required")]
        public int Type { get; set; }

        [Required(ErrorMessage = "Rate is required")]
        public double Rate { get; set; }


        public Remarks Remarks { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        [Required(ErrorMessage = "CompanyId is required")]
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "JobsiteId is required")]
        public int JobsiteId { get; set; }

        [Required(ErrorMessage = "OtcodeId is required")]
        public int OtcodeId { get; set; }
    }

    public class TMSOtSettingGetIdViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "PayrollCode is required")]
        public string PayrollCode { get; set; }

        [Required(ErrorMessage = "Payroll is required")]
        public string Payroll { get; set; }

        [Required(ErrorMessage = "Type is required")]
        public int Type { get; set; }

        [Required(ErrorMessage = "Rate is required")]
        public double Rate { get; set; }


        public int Remarks { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        [Required(ErrorMessage = "CompanyId is required")]
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "JobsiteId is required")]
        public int JobsiteId { get; set; }

        [Required(ErrorMessage = "OtcodeId is required")]
        public int OtcodeId { get; set; }
    }

    public class TMSOtSettingCreateViewModel
    {
        [Required(ErrorMessage = "CompanyId is required")]
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "JobsiteId is required")]
        public int JobsiteId { get; set; }

        [Required(ErrorMessage = "OtcodeId is required")]
        public int OtcodeId { get; set; }

        [Required(ErrorMessage = "PayrollCode is required")]
        public string PayrollCode { get; set; }

        [Required(ErrorMessage = "Payroll is required")]
        public string Payroll { get; set; }

        [Required(ErrorMessage = "Type is required")]
        public int Type { get; set; }

        [Required(ErrorMessage = "Rate is required")]
        public double Rate { get; set; }

        public int Remarks { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }
    }
}
