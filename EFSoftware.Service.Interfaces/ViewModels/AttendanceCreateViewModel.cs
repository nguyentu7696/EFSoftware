using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class AttendanceCreateViewModel
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Value { get; set; }
        public string Status { get; set; }
    }
}
