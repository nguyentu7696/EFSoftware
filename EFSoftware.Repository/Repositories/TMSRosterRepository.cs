using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSRosterRepository : Repository<TMSRoster, int>, ITMSRosterRepository
    {
        private ApplicationDbContext _appContext;

        public TMSRosterRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
