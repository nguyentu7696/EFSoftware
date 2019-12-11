using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSShiftService : IDisposable
    {
        #region GET

        TMSShiftViewModelV2 GetById(int id);
        List<TMSShiftViewModel> GetAll();
        PagedResult<TMSShiftViewModel> GetAllPaging(int page, int pageSize);

        List<TMSShiftViewModel> GetAllWithCompany(int companyid, string filterByName = "");
        PagedResult<TMSShiftViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName= "");

        List<TMSShiftViewModel> GetAllActive();
        #endregion GET

        #region POST

        TMSShift Add(TMSShiftViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSShiftViewModel Vm);

        #endregion PUT

        #region DELETE

        string Delete(int id);

        #endregion DELETE
    }
}
