using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSAllowanceRepository : Repository<TMSAllowance, int>, ITMSAllowanceRepository
    {
        private ApplicationDbContext _appContext;
        public TMSAllowanceRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
