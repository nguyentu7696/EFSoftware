using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSOtCodeRepository : Repository<TMSOtCode, int>, ITMSOtCodeRepository
    {
        private ApplicationDbContext _appContext;
        public TMSOtCodeRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
