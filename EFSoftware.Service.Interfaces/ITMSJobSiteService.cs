using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSJobSiteService : IDisposable
    {
        #region GET

        JobSiteUpdateModel GetById(int id);
        List<JobSiteUpdateModel> GetAll(string filterByName = "");
        PagedResult<JobSiteListModel> GetAllPaging(int page, int pageSize);

        List<JobSiteUpdateModel> GetAllWithSite(int companyid, int departmentid, int siteid, string filterByName = "");
        PagedResult<JobSiteListModel> GetAllPagingWithSite(int page, int pageSize, int companyid, int departmentid, int siteid, string filterByName = "");

        List<TMSJobSiteViewModel> GetAllForDepartment(int departmentid, int companyid, string filterByName = "");
        PagedResult<TMSJobSiteViewModel> GetAllPagingForDepartment(int page, int pageSize, int departmentid, int companyid, string filterByName = "");

        List<JobSiteListModel> GetAllListJobSite(int companyid, int departmentid, int siteid, string filterByName = "");
        PagedResult<JobSiteListModel> GetAllPagingListJobSite(int page, int pageSize, int companyid, int departmentid, int siteid, string filterByName = "");

        #endregion GET

        #region POST

        TMSJobSite Add(JobSiteViewModel Vm);

        #endregion POST

        #region PUT

        void Update(JobSiteUpdateModel Vm);

        #endregion PUT

        #region DELETE

        string Delete(int id);

        #endregion DELETE
    }
}
