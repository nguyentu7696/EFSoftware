using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSZone : AuditableEntity<int>
    {
        public string Name { get; set; }

        public Status Status { get; set; }

        public int ZoneLocationId { get; set; }
    }
}
