using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSAllowanceJobsiteViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Code is required")]
        public string Code { get; set; }

        [Required(ErrorMessage = "Remarks is required")]
        public string Remarks { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        [Required(ErrorMessage = "Amount is required")]
        public decimal Amount { get; set; }

        [Required(ErrorMessage = "CompanyId is required")]
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "JobsiteId is required")]
        public int JobsiteId { get; set; }

        [Required(ErrorMessage = "AllowanceCompanyId is required")]
        public int AllowanceCompanyId { get; set; }
    }

    public class TMSAllowanceJobsiteCreateViewModel
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Code is required")]
        public string Code { get; set; }

        [Required(ErrorMessage = "Remarks is required")]
        public string Remarks { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        [Required(ErrorMessage = "Amount is required")]
        public decimal Amount { get; set; }

        [Required(ErrorMessage = "CompanyId is required")]
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "JobsiteId is required")]
        public int JobsiteId { get; set; }

        [Required(ErrorMessage = "AllowanceCompanyId is required")]
        public int AllowanceCompanyId { get; set; }
    }
}
