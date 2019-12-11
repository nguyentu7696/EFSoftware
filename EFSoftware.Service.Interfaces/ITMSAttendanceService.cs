using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSAttendanceService : IDisposable
    {
        #region GET

        TMSAttendanceViewModel GetById(int id);
        List<TMSAttendanceViewModel> GetAll();
        PagedResult<TMSAttendanceViewModel> GetAllPaging(int page, int pageSize);

        List<TMSAttendanceViewModel> GetAllWithCompany(int companyid, string filterByName);
        PagedResult<TMSAttendanceViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName);
        #endregion GET

        #region POST

        TMSAttendance Add(TMSAttendanceCreateViewModel Vm);

        TMSAttendance AddFromGlobal(TMSAttendanceCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSAttendanceViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
