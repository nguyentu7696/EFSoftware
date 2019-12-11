using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ICompanyBasicInfoService : IDisposable
    {
        #region GET

        CompanyBasicInfoViewModel GetById(int id);
        List<CompanyBasicInfoViewModel> GetAll(string filterByName = "");
        PagedResult<CompanyBasicInfoViewModel> GetAllPaging(int page, int pageSize, string filterByName = "");
        #endregion GET

        #region POST

        CompanyBasicInfo Add(CompanyBasicInfoViewModel Vm);

        #endregion POST

        #region PUT

        void Update(CompanyBasicInfoViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
