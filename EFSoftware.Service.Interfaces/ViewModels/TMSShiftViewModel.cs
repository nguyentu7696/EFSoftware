using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSShiftViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "MainCode is required")]
        public string MainCode { get; set; }

        [Required(ErrorMessage = "Status is required")]
        public Status Status { get; set; }

        [Required(ErrorMessage = "CompanyId is required")]
        public int CompanyId { get; set; }
        public int StatusDisplay { get; set; }
    }

    public class TMSShiftViewModelV2
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "MainCode is required")]
        public string MainCode { get; set; }

        [Required(ErrorMessage = "Status is required")]
        public int Status { get; set; }

        [Required(ErrorMessage = "CompanyId is required")]
        public int CompanyId { get; set; }
    }

}
