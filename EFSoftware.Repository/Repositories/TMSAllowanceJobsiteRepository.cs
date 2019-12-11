using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSAllowanceJobsiteRepository : Repository<TMSAllowanceJobsite, int>, ITMSAllowanceJobsiteRepository
    {
        private ApplicationDbContext _appContext;
        public TMSAllowanceJobsiteRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
