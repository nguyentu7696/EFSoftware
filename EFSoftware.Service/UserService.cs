using AutoMapper;
using EFSoftware.Models;
using EFSoftware.Repositories;
using EFSoftware.Repositories.Interfaces;
using EFSoftware.Service.Interfaces;
using EFSoftware.Service.Interfaces.ViewModels;
using EFSoftware.ViewModels;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFSoftware.Service
{
    public class UserService : IUserService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext _dbContext;

        public UserService(UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager, IMapper mapper, ApplicationDbContext dbContext, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
            _dbContext = dbContext;
        }
        #endregion CTO

        #region GET

        #endregion GET

        #region POST

        public async Task<bool> AddAsync(ApplicationUserViewModel Vm)
        {
            var user = _mapper.Map<ApplicationUserViewModel, ApplicationUser>(Vm);
            var data = await _userManager.CreateAsync(user, Vm.Password);
            var result = (data.Succeeded) ? true : false;
            return result;
        }

        #endregion POST

        #region PUT

        public void UpdateAsync(ApplicationUserViewModel Vm)
        {
            var user = _mapper.Map<ApplicationUserViewModel, ApplicationUser>(Vm);
            _userManager.UpdateAsync(user);
            SaveChanges();
        }
        #endregion PUT

        private void SaveChanges()
        {
            _unitOfWork.SaveChanges();
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
