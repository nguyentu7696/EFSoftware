using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSJobSiteRepository : Repository<TMSJobSite, int>, ITMSJobSiteRepository
    {
        private ApplicationDbContext _appContext;
        public TMSJobSiteRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
