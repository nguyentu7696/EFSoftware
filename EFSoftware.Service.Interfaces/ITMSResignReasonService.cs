using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using EFSoftware.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSResignReasonService : IDisposable
    {
        #region GET

        TMSResignReasonViewModel GetById(int id);
        List<TMSResignReasonViewModel> GetAll();
        PagedResult<TMSResignReasonViewModel> GetAllPaging(int page, int pageSize);

        List<TMSResignReasonViewModel> GetAllWithCompany(int companyid, string filterByName= "");
        PagedResult<TMSResignReasonViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName = "");
        #endregion GET

        #region POST

        TMSResignReason Add(TMSResignReasonViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSResignReasonViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
