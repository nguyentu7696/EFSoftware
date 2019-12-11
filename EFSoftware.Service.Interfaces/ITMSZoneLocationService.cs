using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSZoneLocationService : IDisposable
    {
        #region GET
        TMSZoneLocationViewModel GetById(int id);
        DepartmentSiteModel GetByJobsiteId(int id);
        List<TMSZoneLocationViewModelV2> GetAll(int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "");
        PagedResult<TMSZoneLocationViewModelV2> GetAllWithJobSite(int page, int pageSize, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "");

        List<TMSZoneLocationViewModel> GetListWithJobSite(int jobsiteid);
        #endregion GET

        #region POST

        TMSZoneLocation Add(TMSZoneLocationCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSZoneLocationViewModel Vm);

        #endregion PUT

        #region DELETE

        string Delete(int id);

        #endregion DELETE
    }
}
