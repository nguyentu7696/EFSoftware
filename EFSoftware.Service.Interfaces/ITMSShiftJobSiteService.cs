using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSShiftJobSiteService : IDisposable
    {
        #region GET
        TMSShiftJobSiteViewModel GetById(int id);
        List<TMSShiftJobSiteViewModel> GetAll();
        PagedResult<TMSShiftJobSiteViewModel> GetAllPaging(int page, int pageSize);

        List<TMSShiftJobSiteViewModel> GetAllWithJobSite(int jobsiteid, string filterByName = "");

        List<TMSShiftJobSiteViewModelV2> GetAllWithJobSiteRoster(int jobsiteid, string filterByName = "");

        PagedResult<TMSShiftJobSiteViewModelV2> GetAllPagingWithJobSite(int page, int pageSize, int jobsiteid, string filterByName = "");

        List<string> GetListWorkingHours();

        #endregion GET

        #region POST

        TMSShiftJobSite Add(TMSShiftJobSiteCreateViewModel Vm);

        TMSShiftJobSite AddFromCompany(TMSShiftJobSiteCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSShiftJobSiteViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
