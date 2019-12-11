using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSShiftRepository : Repository<TMSShift, int>, ITMSShiftRepository
    {
        private ApplicationDbContext _appContext;
        public TMSShiftRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
