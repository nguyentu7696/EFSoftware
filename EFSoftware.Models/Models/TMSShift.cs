using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSShift : AuditableEntity<int>
    {
        public string MainCode { get; set; }
        public Status Status { get; set; }
        public int CompanyId { get; set; }
    }
}
