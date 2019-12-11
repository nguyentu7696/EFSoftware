using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository
{
    public class TMSPublicHolidayRepository : Repository<TMSPublicHoliday, int>, ITMSPublicHolidayRepository
    {
        private ApplicationDbContext _appContext;
        public TMSPublicHolidayRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
