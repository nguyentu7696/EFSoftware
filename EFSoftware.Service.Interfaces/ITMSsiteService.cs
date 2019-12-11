using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSsiteService : IDisposable
    {
        #region GET

        TMSsiteViewModel GetById(int id);
        List<TMSsiteViewModel> GetAll();
        PagedResult<TMSsiteViewModel> GetAllPaging(int page, int pageSize);
        List<SiteViewModel> GetListSite();

        PagedResult<SiteViewModel> GetListSitePaging(int page, int pageSize);

        List<TMSsiteViewModel> GetAllForCompany(int departmentid, int companyid, string filterByName = "");
        PagedResult<TMSsiteViewModel> GetAllPagingForCompany(int page, int pageSize, int departmentid, int companyid, string filterByName = "");

        #endregion GET

        #region POST

        TMSsite Add(TMSsiteViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSsiteViewModel Vm);

        #endregion PUT

        #region DELETE

        string Delete(int id);

        #endregion DELETE
    }
}
