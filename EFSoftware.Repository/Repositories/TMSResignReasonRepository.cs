
using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSResignReasonRepository : Repository<TMSResignReason, int>, ITMSResignReasonRepository
    {
        private ApplicationDbContext _appContext;
        public TMSResignReasonRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }

    }
}

