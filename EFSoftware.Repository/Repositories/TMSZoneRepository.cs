using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSZoneRepository : Repository<TMSZone, int>, ITMSZoneRepository
    {
        private ApplicationDbContext _appContext;
        public TMSZoneRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
