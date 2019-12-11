using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using EFSoftware.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface IDepartmentService : IDisposable
    {
        #region GET

        DepartmentViewModel GetById(int id);
        List<DepartmentViewModel> GetAll();
        PagedResult<DepartmentViewModel> GetAllPaging(int page, int pageSize);

        List<DepartmentViewModel> GetAllWithCompany(int companyid, string filterByName = "");
        PagedResult<DepartmentViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName = "");
        #endregion GET

        #region POST

        Department Add(DepartmentViewModel Vm);

        #endregion POST

        #region PUT

        void Update(DepartmentViewModel Vm);

        #endregion PUT

        #region DELETE

        string Delete(int id);

        #endregion DELETE
    }
}
