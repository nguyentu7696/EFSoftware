using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSPublicHolidayService : IDisposable
    {
        #region GET

        TMSPublicHolidayViewModel GetById(int id);
        List<TMSPublicHolidayViewModel> GetAll(string country, int year, string filterByName = "");
        PagedResult<TMSPublicHolidayViewModel> GetAllPaging(int page, int pageSize, string country, int year);

        List<TMSPublicHolidayViewModel> GetAllWithCompany(string country, int year, int companyid,  string filterByName = "");
        PagedResult<TMSPublicHolidayViewModel> GetAllPagingWithCompany(int page, int pageSize, string country, int year, int companyid, string filterByName = "");

        #endregion GET

        #region POST

        TMSPublicHoliday Add(TMSPublicHolidayCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSPublicHolidayViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
