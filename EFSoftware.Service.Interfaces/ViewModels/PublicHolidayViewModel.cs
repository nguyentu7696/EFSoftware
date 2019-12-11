using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class PublicHolidayViewModel
    {
        public int Id { get; set; }
        public string Event { get; set; }
        public DateTime PeriodStartDate { get; set; }
        public DateTime PeriodEndDate { get; set; }
        public int Year { get; set; }
        public string Country { get; set; }
        public string CompanyUsed { get; set; }
    }

    public class PublicHolidayWithEventViewModel
    {
        public int Id { get; set; }
        public string Event { get; set; }
    }
}
