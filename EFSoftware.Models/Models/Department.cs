using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class Department : AuditableEntity<int>
    {
        public string Name { get; set; }
        public int CompanyId { get; set; }
    }
}
