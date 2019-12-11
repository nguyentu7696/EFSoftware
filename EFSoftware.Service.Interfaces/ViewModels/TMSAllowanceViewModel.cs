using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSAllowanceViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Code is required")]
        public string Code { get; set; }

        [Required(ErrorMessage = "Remarks is required")]
        public string Remarks { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        [Required(ErrorMessage = "Company is required")]
        public decimal Amount { get; set; }

        [Required(ErrorMessage = "Company is required")]
        public int CompanyId { get; set; }
    }
}
