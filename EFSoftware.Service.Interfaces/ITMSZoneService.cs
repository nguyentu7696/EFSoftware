using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSZoneService : IDisposable
    {
        #region GET

        TMSZoneViewModel GetById(int id);
        List<TMSZoneViewModel> GetAll();
        PagedResult<TMSZoneViewModel> GetAllPaging(int page, int pageSize);

        List<TMSZoneViewModel> GetAllWithZoneLocation(int zonelocationid, string filterByName = "");
        PagedResult<TMSZoneListViewModel> GetAllPagingWithZoneLocation(int page, int pageSize, int zonelocationid, string filterByName = "");

        #endregion GET

        #region POST

        TMSZone Add(TMSZoneCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSZoneViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
