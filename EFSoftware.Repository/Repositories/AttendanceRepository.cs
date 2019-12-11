using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class AttendanceRepository : Repository<Attendance,int>, IAttendanceRepository
    {
        private ApplicationDbContext _appContext;
        public AttendanceRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }

        
    }
}
