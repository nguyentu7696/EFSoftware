using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSEventContractRepository : Repository<TMSEventContract, int>, ITMSEventContractRepository
    {
        private ApplicationDbContext _appContext;
        public TMSEventContractRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
