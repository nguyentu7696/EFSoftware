using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSJobSiteViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int SiteId { get; set; }
        public int ZoneId { get; set; }
        public int CompanyId { get; set; }
        public int DepartmentId { get; set; }
    }

    public class JobSiteViewModel
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }
        public int ZoneId { get; set; }
        public int Level { get; set; }
        public string Area { get; set; }
        public string Location { get; set; }
        [Required(ErrorMessage = "DepartmentId is required")]
        public int DepartmentId { get; set; }
        [Required(ErrorMessage = "SiteId is required")]
        public int SiteId { get; set; }
        public int CompanyId { get; set; }
    }

    public class JobSiteUpdateModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ZoneId { get; set; }
        public int Level { get; set; }
        public string Area { get; set; }
        public string Location { get; set; }
        public int DepartmentId { get; set; }
        public int SiteId { get; set; }
        public int CompanyId { get; set; }
    }

    public class JobSiteListModel
    {
        public JobSiteListModel(int id, string name, string site, string department, int companyid, int departmentid, int siteid)
        {
            Id = id;
            Name = name;
            Site = site;
            Department = department;
            CompanyId = companyid;
            DepartmentId = departmentid;
            SiteId = siteid;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Site { get; set; }
        public string Department { get; set; }

        public int DepartmentId { get; set; }
        public int SiteId { get; set; }
        public int CompanyId { get; set; }
    }

    public class TMSJobSiteListModel
    {
        public TMSJobSiteListModel(int id, string name, string site, string department)
        {
            Id = id;
            Name = name;
            Site = site;
            Department = department;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Site { get; set; }
        public string Department { get; set; }
    }
}
