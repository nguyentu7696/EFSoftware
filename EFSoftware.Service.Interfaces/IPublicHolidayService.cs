using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface IPublicHolidayService : IDisposable
    {
        #region GET

        PublicHolidayViewModel GetById(int id);
        List<PublicHolidayViewModel> GetAllWithCountryAndYear(string country, int year, string keySearch);
        PagedResult<PublicHolidayViewModel> GetAllPagingWithCountryAndYear(int page, int pageSize, string country, int year, string keySearch = "", int orderByEvent = 0, int orderByFrom = 0, int orderByTo = 0);
        List<PublicHolidayWithEventViewModel> GetAllWithEvent();
        List<PublicHolidayViewModel> GetAll();
        PagedResult<PublicHolidayViewModel> GetAllPaging(int page, int pageSize);
        #endregion GET

        #region POST

        PublicHoliday Add(PublicHolidayViewModel Vm);

        #endregion POST

        #region PUT

        void Update(PublicHolidayViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
