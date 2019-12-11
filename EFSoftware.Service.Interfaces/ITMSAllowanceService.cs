using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSAllowanceService : IDisposable
    {
        #region GET

        TMSAllowanceViewModel GetById(int id);
        List<TMSAllowanceViewModel> GetAll();
        PagedResult<TMSAllowanceViewModel> GetAllPaging(int page, int pageSize);

        List<TMSAllowanceViewModel> GetAllWithCompany(int companyid, string filterByName = "");
        PagedResult<TMSAllowanceViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName = "");

        List<TMSAllowanceViewModel> GetAllActive();
        #endregion GET

        #region POST

        TMSAllowance Add(TMSAllowanceViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSAllowanceViewModel Vm);

        #endregion PUT

        #region DELETE

        string Delete(int id);

        #endregion DELETE
    }
}
