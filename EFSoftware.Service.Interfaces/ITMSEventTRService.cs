using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSEventTRService : IDisposable
    {
        #region GET

        List<TMSEventTerminationResignViewModel> GetByEmployeeId(int employeeId);

        #endregion GET

        #region POST

        TMSEventTerminationResign Add(TMSEventCreateTRViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSEventTerminationResignViewModel Vm);

        #endregion PUT
    }
}
