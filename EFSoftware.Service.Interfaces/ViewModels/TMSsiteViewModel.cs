using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSsiteViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CompanyId { get; set; }

        public int DepartmentId { get; set; }
    }

    public class SiteViewModel
    {
        public SiteViewModel(int id, string name, string company, string department)
        {
            Id = id;
            Name = name;
            Company = company;
            Department = department;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Company { get; set; }

        public string Department { get; set; }
    }
}
