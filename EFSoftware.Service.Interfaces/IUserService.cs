using EFSoftware.Service.Interfaces.ViewModels;
using EFSoftware.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EFSoftware.Service.Interfaces
{
    public interface IUserService : IDisposable
    {
        #region GET

        #endregion GET

        #region POST

        Task<bool> AddAsync(ApplicationUserViewModel Vm);

        #endregion POST

        #region PUT

        void UpdateAsync(ApplicationUserViewModel Vm);

        #endregion PUT
    }
}
