using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSZoneLocation : AuditableEntity<int>
    {
        public string Name { get; set; }
        public Status Status { get; set; }
        public int JobSiteId { get; set; }
        public int LevelId { get; set; }
        public int AreaId { get; set; }
        public int LocationId { get; set; }
    }
}
