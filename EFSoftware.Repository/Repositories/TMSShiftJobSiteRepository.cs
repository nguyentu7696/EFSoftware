﻿using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSShiftJobSiteRepository : Repository<TMSShiftJobSite, int>, ITMSShiftJobSiteRepository
    {
        private ApplicationDbContext _appContext;
        public TMSShiftJobSiteRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
