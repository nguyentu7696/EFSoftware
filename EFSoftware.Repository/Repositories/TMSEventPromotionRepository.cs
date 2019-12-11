using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class TMSEventPromotionRepository : Repository<TMSEventPromotion, int>, ITMSEventPromotionRepository
    {
        private ApplicationDbContext _appContext;
        public TMSEventPromotionRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
    }
}
