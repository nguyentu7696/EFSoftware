using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSEventRejoinService : IDisposable
    {
        #region GET

        List<TMSEventRejoinViewModel> GetByEmployeeId(int employeeId);

        #endregion GET

        #region POST

        TMSEventRejoin Add(TMSEventRejoinCreateViewModel Vm);

        #endregion POSTs

        #region PUT

        void Update(TMSEventRejoinViewModel Vm);

        #endregion PUT
    }
}
