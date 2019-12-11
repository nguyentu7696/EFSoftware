using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Core.Models
{
    public class BaseModel
    {
        public string Id { get; set; }
        public string CreatedBy { get; set; }
        public string LastUpdatedBy { get; set; }
        public string DeletedBy { get; set; }
        public DateTimeOffset CreatedTime { get; set; }
    }
}
