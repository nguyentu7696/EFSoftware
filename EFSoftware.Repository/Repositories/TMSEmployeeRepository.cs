using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSEmployeeRepository : Repository<TMSEmployee, int>, ITMSEmployeeRepository
    {
        private ApplicationDbContext _appContext;
        public TMSEmployeeRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
