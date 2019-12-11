// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using EFSoftware.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFSoftware.Repositories.Interfaces
{
    public interface IUnitOfWork
    {
        IAttendanceRepository Attendance { get; }
        ITMSJobSiteRepository JobSite { get; }
        ITMSEventContractRepository EventContract { get; }

        int SaveChanges();
    }
}
