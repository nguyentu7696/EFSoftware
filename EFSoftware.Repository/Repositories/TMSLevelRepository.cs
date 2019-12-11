using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSLevelRepository : Repository<TMSLevel, int>, ITMSLevelRepository
    {
        private ApplicationDbContext _appContext;
        public TMSLevelRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
