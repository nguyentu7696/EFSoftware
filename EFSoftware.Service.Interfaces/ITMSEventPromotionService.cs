using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSEventPromotionService : IDisposable
    {
        #region GET

        List<TMSEventPromotionViewModel> GetByEmployeeId(int employeeId);

        #endregion GET

        #region POST

        TMSEventPromotion Add(TMSEventPromotionCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSEventPromotionViewModel Vm);

        #endregion PUT
    }
}
