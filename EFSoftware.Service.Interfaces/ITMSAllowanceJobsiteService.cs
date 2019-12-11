using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSAllowanceJobsiteService : IDisposable
    {
        #region GET

        TMSAllowanceJobsiteViewModel GetById(int id);
        List<TMSAllowanceJobsiteViewModel> GetAll();
        PagedResult<TMSAllowanceJobsiteViewModel> GetAllPaging(int page, int pageSize);

        List<TMSAllowanceJobsiteViewModel> GetAllWithCompany(int companyid);
        PagedResult<TMSAllowanceJobsiteViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid);

        List<TMSAllowanceJobsiteViewModel> GetAllWithJobsite(int companyid, int jobsiteid, string filterByName = "");
        PagedResult<TMSAllowanceJobsiteViewModel> GetAllPagingWithJobsite(int page, int pageSize, int companyid, int jobsiteid, string filterByName = "");

        #endregion GET

        #region POST

        TMSAllowanceJobsite Add(TMSAllowanceJobsiteCreateViewModel Vm);

        TMSAllowanceJobsite AddFromCompany(TMSAllowanceJobsiteCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSAllowanceJobsiteViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
