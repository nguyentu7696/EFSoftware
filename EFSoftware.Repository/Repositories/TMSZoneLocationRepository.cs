using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSZoneLocationRepository : Repository<TMSZoneLocation, int>, ITMSZoneLocationRepository
    {
        private ApplicationDbContext _appContext;
        public TMSZoneLocationRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
