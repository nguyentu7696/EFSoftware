using EFSoftware.Models.Models;
using EFSoftware.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Repository.Interfaces
{
    public interface ITMSAttendanceRepository : IRepository<TMSAttendance, int>
    {
    }
}
