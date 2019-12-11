using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSAreaService : IDisposable
    {
        #region GET

        TMSAreaViewModel GetById(int id);
        List<TMSAreaViewModel> GetAll();
        PagedResult<TMSAreaViewModel> GetAllPaging(int page, int pageSize);

        List<TMSAreaViewModel> GetAllWithZoneLocation(int zonelocationid, string filterByName = "");
        PagedResult<TMSAreaViewModel> GetAllPagingWithZoneLocation(int page, int pageSize, int zonelocationid, string filterByName = "");

        #endregion GET

        #region POST

        TMSArea Add(TMSAreaCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSAreaViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
