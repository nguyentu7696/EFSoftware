using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSArea : AuditableEntity<int>
    {
        public string Name { get; set; }
        public string Value { get; set; }
        public int ZoneLocationId { get; set; }
    }
}
