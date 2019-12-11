using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSLevelService : IDisposable
    {
        #region GET

        TMSLevelViewModel GetById(int id);
        List<TMSLevelViewModel> GetAll();
        PagedResult<TMSLevelViewModel> GetAllPaging(int page, int pageSize);

        List<TMSLevelViewModel> GetAllWithZoneLocation(int zonelocationid , string filterByName = "");
        PagedResult<TMSLevelViewModel> GetAllPagingWithZoneLocation(int page, int pageSize, int zonelocationid , string filterByName = "");

        #endregion GET

        #region POST

        TMSLevel Add(TMSLevelCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSLevelViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
