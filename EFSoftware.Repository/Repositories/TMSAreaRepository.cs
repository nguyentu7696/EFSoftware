using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSAreaRepository : Repository<TMSArea, int>, ITMSAreaRepository
    {
        private ApplicationDbContext _appContext;
        public TMSAreaRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
