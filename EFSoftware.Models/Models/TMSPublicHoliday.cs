using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSPublicHoliday : AuditableEntity<int>
    {
        public string Event { get; set; }
        public int Year { get; set; }
        public string Country { get; set; }
        public DateTime PeriodStartDate { get; set; }
        public DateTime PeriodEndDate { get; set; }
        public int PublicHolidayId { get; set; }
        public int CompanyId { get; set; }
    }
}
