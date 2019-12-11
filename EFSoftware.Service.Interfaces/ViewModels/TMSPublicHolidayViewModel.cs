using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSPublicHolidayViewModel
    {
        public int Id { get; set; }
        public string Event { get; set; }
        public int Year { get; set; }
        public string Country { get; set; }
        public DateTime PeriodStartDate { get; set; }
        public DateTime PeriodEndDate { get; set; }
        public int PublicHolidayId { get; set; }
        public int CompanyId { get; set; }
    }

    public class TMSPublicHolidayCreateViewModel
    {
        [Required(ErrorMessage = "Event is required")]
        public string Event { get; set; }
        public int Year { get; set; }
        public string Country { get; set; }

        public int PublicHolidayId { get; set; }
        public int CompanyId { get; set; }

        [Required(ErrorMessage = "Field is required")]
        public DateTime PeriodStartDate { get; set; }
        [Required(ErrorMessage = "Field is required")]
        public DateTime PeriodEndDate { get; set; }
    }
}
