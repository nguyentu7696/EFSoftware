using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSEventTransferRepository : Repository<TMSEventTransfer, int>, ITMSEventTransferRepository
    {
        private ApplicationDbContext _appContext;
        public TMSEventTransferRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
