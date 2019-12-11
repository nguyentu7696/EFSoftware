using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSRosterService : IDisposable
    {
        #region GET

        List<TMSRosterViewModel> GetAll();

        TMSRosterViewModel GetDetailRoster(int employeeId, DateTime date);

        /// <summary>
        /// maximum 12 month
        /// </summary>
        /// <param name="startDate"></param>
        /// <param name="endDate"></param>
        /// <returns></returns>
        List<RosterData> GetByForMonth(DateTime startDate, DateTime endDate, int employeeId, int compnayId, int jobsiteId);

        #endregion GET

        #region POST

        TMSRoster Update(TMSRosterViewModel Vm);

        void SaveForMonth(List<TMSRosterViewModel> LstRosterChanged);

        void SaveDuplicate(DuplicateModel Vm);

        #endregion POST
    }
}
