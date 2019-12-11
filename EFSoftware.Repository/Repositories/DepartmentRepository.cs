using EFSoftware.Models.Models;
using EFSoftware.Repositories;
using EFSoftware.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Repositories
{
    public class DepartmentRepository : Repository<Department, int>, IDepartmentRepository
    {
        private ApplicationDbContext _appContext;
        public DepartmentRepository(ApplicationDbContext context) : base(context)
        {
            _appContext = context;
        }
        
    }
}
