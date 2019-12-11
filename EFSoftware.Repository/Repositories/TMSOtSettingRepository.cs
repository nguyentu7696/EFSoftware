using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSOtSettingRepository : Repository<TMSOtSetting, int>, ITMSOtSettingRepository
    {
        private ApplicationDbContext _appContext;
        public TMSOtSettingRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
