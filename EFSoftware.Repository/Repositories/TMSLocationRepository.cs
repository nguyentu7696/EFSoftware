using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSLocationRepository : Repository<TMSLocation, int>, ITMSLocationRepository
    {
        private ApplicationDbContext _appContext;
        public TMSLocationRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
