using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSLocationService : IDisposable
    {
        #region GET

        TMSLocationGetIdViewModel GetById(int id);
        List<TMSLocationViewModel> GetAll();
        PagedResult<TMSLocationViewModel> GetAllPaging(int page, int pageSize);

        List<TMSLocationViewModel> GetAllWithZoneLocation(int zonelocationid, string filterByName = "");
        PagedResult<TMSLocationViewModel> GetAllPagingWithZoneLocation(int page, int pageSize, int zonelocationid, string filterByName = "");

        #endregion GET

        #region POST

        TMSLocation Add(TMSLocationCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSLocationViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
