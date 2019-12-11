using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSEventTransferService : IDisposable
    {
        #region GET

        List<TMSEventTransferViewModel> GetByEmployeeId(int employeeId);
    
        #endregion GET

        #region POST

        TMSEventTransfer Add(TMSEventTransferCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSEventTransferViewModel Vm);

        #endregion PUT

    }
}
