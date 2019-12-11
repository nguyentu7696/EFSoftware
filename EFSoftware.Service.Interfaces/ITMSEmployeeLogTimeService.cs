using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSEmployeeLogTimeService : IDisposable
    {
        #region GET

        List<TMSEmployeeLogTimeListViewModel> GetAllEmployeeLogTime(DateTime dateLogTime,int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "");
        List<TMSEmployeeLogtimeModel> GetAllEmployeeWithMonth(DateTime date, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "");
        PagedResult<TMSEmployeeLogTimeListViewModel> GetAllPagingEmployeeLogTime(int page, int pageSize, DateTime dateLogTime, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "");

        //absent
        List<TMSEmployeeLogTimeListViewModel> GetAllEmployeeAbsent(DateTime dateLogTime, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "");

        PagedResult<TMSEmployeeLogTimeListViewModel> GetAllPagingEmployeeAbsent(int page, int pageSize, DateTime dateLogTime, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "");


        //Modal
        List<TMSEmployeeModalViewModel> GetAllEmployeeModal(int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "");

        PagedResult<TMSEmployeeModalViewModel> GetAllPagingEmployeeModal(int page, int pageSize, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "");

        //Manual Record

        List<TMSEmployeeLogTimeViewModel> GetWithEmpIdAndDateLog(int employeeId, DateTime dateLogTime);

        #endregion GET

        #region POST

        TMSEmployeeLogTime Add(TMSEmployeeLogTimeViewModel Vm);

        #endregion POST

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
