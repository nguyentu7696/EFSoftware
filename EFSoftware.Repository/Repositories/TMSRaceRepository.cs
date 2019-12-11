using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSRaceRepository : Repository<TMSRace, int>, ITMSRaceRepository
    {
        private ApplicationDbContext _appContext;
        public TMSRaceRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
