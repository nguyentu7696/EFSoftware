// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EFSoftware.Repositories.Interfaces;
using EFSoftware.Repository.Interfaces;
using EFSoftware.Repository.Repositories;

namespace EFSoftware.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        readonly ApplicationDbContext _context;
        IAttendanceRepository _attendance;
        ITMSJobSiteRepository _jobSite;
        ITMSEventContractRepository _eventContract;


        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }
        public IAttendanceRepository Attendance
        {
            get
            {
                if (_attendance == null)
                    _attendance = new AttendanceRepository(_context);

                return _attendance;
            }
        }
        public ITMSJobSiteRepository JobSite
        {
            get
            {
                if (_jobSite == null)
                    _jobSite = new TMSJobSiteRepository(_context);

                return _jobSite;
            }
        }

        public ITMSEventContractRepository EventContract
        {
            get
            {
                if (_eventContract == null)
                    _eventContract = new TMSEventContractRepository(_context);

                return _eventContract;
            }
        }

        public int SaveChanges()
        {
            return _context.SaveChanges();
        }
    }
}
