using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSEventTRRepository : Repository<TMSEventTerminationResign, int>, ITMSEventTRRepository
    {
        private ApplicationDbContext _appContext;
        public TMSEventTRRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
