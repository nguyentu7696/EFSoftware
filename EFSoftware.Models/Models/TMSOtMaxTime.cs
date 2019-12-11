
using System;
using System.Collections.Generic;
using System.Text;
namespace EFSoftware.Models.Models
{
    public class TMSOtMaxTime : AuditableEntity<int>
    {
        public int JobSiteId { get; set; }
        public int WorkingHoursWeek { get; set; }
        public int OtHoursMonth { get; set; }
    }
}
