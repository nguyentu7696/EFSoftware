using EFSoftware.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class CompanyBasicInfoRepository : Repository<CompanyBasicInfo, int>, ICompanyBasicInfoRepository
    {
        private ApplicationDbContext _appContext;
        public CompanyBasicInfoRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }

        
    }
}
