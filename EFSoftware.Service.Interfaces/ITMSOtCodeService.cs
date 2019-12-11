using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSOtCodeService : IDisposable
    {
        #region GET

        TMSOtCodeGetIdViewModel GetById(int id);
        List<TMSOtCodeViewModel> GetAll();
        PagedResult<TMSOtCodeViewModel> GetAllPaging(int page, int pageSize);

        List<TMSOtCodeGetIdViewModel> GetAllWithCompany(int companyid, string filterByName = "");
        PagedResult<TMSOtCodeViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName = "");

        #endregion GET

        #region POST

        TMSOtCode Add(TMSOtCodeCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSOtCodeViewModel Vm);

        #endregion PUT

        #region DELETE

        string Delete(int id);

        #endregion DELETE
    }
}
