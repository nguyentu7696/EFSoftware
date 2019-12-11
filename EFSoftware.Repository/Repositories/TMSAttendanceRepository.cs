using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSAttendanceRepository : Repository<TMSAttendance, int>, ITMSAttendanceRepository
    {
        private ApplicationDbContext _appContext;
        public TMSAttendanceRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
