using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSAttendanceViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Code { get; set; }

        [Required(ErrorMessage = "Company is required")]
        public int CompanyId { get; set; }

        public int  AttendanceId { get; set; }

        [Required(ErrorMessage = "Value is required")]
        public string Value { get; set; }

        public string Remarks { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        [Required(ErrorMessage = "Status is required")]
        public int Status { get; set; }
    }

    public class TMSAttendanceCreateViewModel
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Code { get; set; }

        [Required(ErrorMessage = "Company is required")]
        public int CompanyId { get; set; }
        
        [Required(ErrorMessage = "Value is required")]
        public string Value { get; set; }

        public string Remarks { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        [Required(ErrorMessage = "Status is required")]
        public int Status { get; set; }

        public int AttendanceId { get; set; }
    }
}
