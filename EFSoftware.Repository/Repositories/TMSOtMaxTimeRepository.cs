
using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSOtMaxTimeRepository : Repository<TMSOtMaxTime, int>, ITMSOtMaxTimeRepository
    {
        private ApplicationDbContext _appContext;
        public TMSOtMaxTimeRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}

