using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSsiteRepository : Repository<TMSsite, int>, ITMSsiteRepository
    {
        private ApplicationDbContext _appContext;
        public TMSsiteRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
