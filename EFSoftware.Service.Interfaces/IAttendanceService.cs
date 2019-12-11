using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using EFSoftware.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface IAttendanceService : IDisposable
    {
        #region GET

        AttendanceViewModel GetById(int id);
        List<AttendanceViewModel> GetAll(string filterByName = "", int orderByName = 0, int orderByCode = 0, int orderByValue = 0);
        PagedResult<AttendanceViewModel> GetAllPaging(int page, int pageSize, string filterByName = "", int orderByName = 0, int orderByCode = 0, int orderByValue = 0);
        List<AttendanceViewModel> GetAllByUsedAndStatus();

        List<AttendanceViewModel> GetAllActive(string filterByName = "", int orderByName = 0, int orderByCode = 0, int orderByValue = 0);
        #endregion GET

        #region POST

        Attendance Add(AttendanceCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(AttendanceViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);
        
        #endregion DELETE
    }
}
