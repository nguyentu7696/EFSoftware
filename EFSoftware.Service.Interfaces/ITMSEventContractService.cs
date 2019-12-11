using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSEventContractService : IDisposable
    {
        #region GET

        List<TMSEventContractViewModel> GetByEmployeeId(int employeeId);

        #endregion GET

        #region POST

        TMSEventContract Add(TMSEventContractCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSEventContractViewModel Vm);

        #endregion PUT
    }
}
