using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSRaceService : IDisposable
    {
        #region GET

        TMSRaceViewModel GetById(int id);
        List<TMSRaceViewModel> GetAll();
        PagedResult<TMSRaceViewModel> GetAllPaging(int page, int pageSize);

        List<TMSRaceViewModel> GetAllWithCompany(int companyid, string filterByName = "");
        PagedResult<TMSRaceViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName = "");

        #endregion GET

        #region POST

        TMSRace Add(TMSRaceCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSRaceViewModel Vm);

        #endregion PUT
    }
}
