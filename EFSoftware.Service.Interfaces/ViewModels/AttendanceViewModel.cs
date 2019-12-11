using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EFSoftware.ViewModels
{
    public class AttendanceViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Value { get; set; }
        public int Used { get; set; }
        public string CompanyUsed { get; set; }
        public int Status { get; set; }
    }
}
