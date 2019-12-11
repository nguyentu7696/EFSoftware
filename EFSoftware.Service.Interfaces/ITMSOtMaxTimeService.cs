
using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSOtMaxTimeService : IDisposable
    {
        #region GET
        TMSOtMaxTimeViewModel GetById(int id);
        List<TMSOtMaxTimeViewModel> GetAll();

        TMSOtMaxTimeViewModel GetWithJobSite(int jobsiteid);
        #endregion GET

        #region POST

        TMSOtMaxTime Add(TMSOtMaxTimeCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSOtMaxTimeViewModel Vm);

        #endregion PUT

        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
