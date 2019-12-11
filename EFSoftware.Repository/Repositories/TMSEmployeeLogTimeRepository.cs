using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSEmployeeLogTimeRepository : Repository<TMSEmployeeLogTime, int>, ITMSEmployeeLogTimeRepository
    {
        private ApplicationDbContext _appContext;
        public TMSEmployeeLogTimeRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
