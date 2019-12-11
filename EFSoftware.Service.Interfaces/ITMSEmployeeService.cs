using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSEmployeeService : IDisposable
    {
        #region GET

        TMSEmployeeViewModel GetById(int id);
        TMSEmployeeViewModel FindByEmailAsync(string userName);
        List<TMSEmployeeViewModel> GetAll();
        PagedResult<TMSEmployeeListViewModel> GetAllPaging(int page, int pageSize);

        List<TMSEmployeeViewModel> GetAllWithJobSite(int companyid, int departmentid, int siteid, int jobsitedid, string filterByName = "");
        PagedResult<TMSEmployeeListViewModel> GetAllPagingWithJobSite(int page, int pageSize, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "");

        //List<TMSEmployeeViewModel> GetAllForCompany(int jobsiteid, int companyid);
        //PagedResult<TMSEmployeeViewModel> GetAllPagingForCompany(int page, int pageSize, int jobsiteid, int companyid);

        #endregion GET

        #region POST

        TMSEmployee Add(TMSEmployeeCreateViewModel Vm);
        

        #endregion POST

        #region PUT

        void Update(TMSEmployeeViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
