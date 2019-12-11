using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSOtCodeViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "CompanyId is required")]
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "PayrollCode is required")]
        public string PayrollCode { get; set; }

        [Required(ErrorMessage = "Payroll is required")]
        public string Payroll { get; set; }

        [Required(ErrorMessage = "Type is required")]
        public int Type { get; set; }

        [Required(ErrorMessage = "Rate is required")]
        public double Rate { get; set; }

        [Required(ErrorMessage = "Remarks is required")]
        public Remarks Remarks { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public int Used { get; set; }
        public string JobsiteUsed { get; set; }

    }

    public class TMSOtCodeGetIdViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "CompanyId is required")]
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "PayrollCode is required")]
        public string PayrollCode { get; set; }

        [Required(ErrorMessage = "Payroll is required")]
        public string Payroll { get; set; }

        [Required(ErrorMessage = "Type is required")]
        public int Type { get; set; }

        [Required(ErrorMessage = "Rate is required")]
        public double Rate { get; set; }

        [Required(ErrorMessage = "Remarks is required")]
        public int Remarks { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public int Used { get; set; }
        public string JobsiteUsed { get; set; }

    }

    public class TMSOtCodeCreateViewModel
    {
        [Required(ErrorMessage = "CompanyId is required")]
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "PayrollCode is required")]
        public string PayrollCode { get; set; }

        [Required(ErrorMessage = "Payroll is required")]
        public string Payroll { get; set; }

        [Required(ErrorMessage = "Type is required")]
        public int Type { get; set; }

        [Required(ErrorMessage = "Rate is required")]
        public double Rate { get; set; }

        [Required(ErrorMessage = "Remarks is required")]
        public int Remarks { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }
    }
}
