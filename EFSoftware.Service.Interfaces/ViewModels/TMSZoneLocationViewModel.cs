using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSZoneLocationViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Status is required")]
        public Status Status { get; set; }

        [Required(ErrorMessage = "JobSiteId is required")]
        public int JobSiteId { get; set; }

        public int LevelId { get; set; }

        public int AreaId { get; set; }

        public int LocationId { get; set; }
    }

    public class DepartmentSiteModel
    {
        public int DepartmentId { get; set; }

        public int SiteId { get; set; }
    }

    public class TMSZoneLocationViewModelV2
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int JobSiteId { get; set; }

        public Status Status { get; set; }
        public DateTime CreatedDate { get; set; }
    }

    public class TMSZoneLocationCreateViewModel
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Status is required")]
        public Status Status { get; set; }

        [Required(ErrorMessage = "JobSiteId is required")]
        public int JobSiteId { get; set; }

        public int LevelId { get; set; }

        public int AreaId { get; set; }

        public int LocationId { get; set; }
    }

    public class TMSZoneLocationListViewModel
    {
        public TMSZoneLocationListViewModel(int id, string name, Status status, int companyid, int departmentid, int siteid, int jobsiteid)
        {
            Id = id;
            Name = name;
            Status = status;
            CompanyId = companyid;
            DepartmentId = departmentid;
            SiteId = siteid;
            JobSiteId = jobsiteid;
        }
        public int Id { get; set; }

        public string Name { get; set; }

        public Status Status { get; set; }

        public int CompanyId { get; set; }

        public int DepartmentId { get; set; }

        public int SiteId { get; set; }

        public int JobSiteId { get; set; }
    }
}
