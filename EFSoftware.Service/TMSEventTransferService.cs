using AutoMapper;
using EFSoftware.Core;
using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Repositories.Interfaces;
using EFSoftware.Repository.Interfaces;
using EFSoftware.Repository.Repositories;
using EFSoftware.Service.Interfaces;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EFSoftware.Service
{
    public class TMSEventTransferService : ITMSEventTransferService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSEventTransferRepository _tMSEventTransferRepository;
        private ITMSZoneLocationRepository _tMSZoneLocationRepository;
        private ITMSJobSiteRepository _tMSJobSiteRepository;
        private IDepartmentRepository _departmentRepository;

        public TMSEventTransferService(IUnitOfWork unitOfWork, IMapper mapper, ITMSEventTransferRepository tMSEventTransferRepository,
            ITMSZoneLocationRepository tMSZoneLocationRepository, ITMSJobSiteRepository tMSJobSiteRepository
             , IDepartmentRepository departmentRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _tMSEventTransferRepository = tMSEventTransferRepository;
            _tMSZoneLocationRepository = tMSZoneLocationRepository;
            _tMSJobSiteRepository = tMSJobSiteRepository;
            _departmentRepository = departmentRepository;
        }
        #endregion CTO

        #region GET
        public List<TMSEventTransferViewModel> GetByEmployeeId(int employeeId)
        {
            var model = _tMSEventTransferRepository.Find(x => x.EmployeeId == employeeId && x.DeleteFlag != DeleteFlg.Delete).ToList();
            var zoneLocation = _tMSZoneLocationRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobsite = _tMSJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            try
            {
                var data = (from m in model
                            join z in zoneLocation on m.ZoneLocationId equals z.Id
                            join j in jobsite on z.JobSiteId equals j.Id
                            join d in department on j.DepartmentId equals d.Id
                            select new TMSEventTransferViewModel
                            (m.Id, m.EmployeeId, m.EventType, m.PeriodStart, m.PeriodEnd, z.Id, m.ZoneId, m.ShiftId,
                            m.ShiftKey, m.SubContractor, m.Recall, m.Remarks, m.EligibilityShift, m.EligibilityAllowance, m.MealAllowanceId,
                            m.MealAllowanceValue, m.MonthlyShiftAllowanceId, m.MonthlyShiftAllowanceValue, m.EligibilityOt, m.MaxWorkingHours,
                            m.OtPhId, m.OtPhValue, m.OtRdId, m.OtRdValue, m.OtOId, m.OtOValue, m.OtStdId, m.OtStdValue, m.TransportAllowanceId,
                            m.TransportAllowanceValue, z.Name, j.Id, j.Name, d.Id, d.Name)).ToList();
                return data;
            }
            catch
            {
                return null;
            }
        }

        #endregion GET

        #region POST

        public TMSEventTransfer Add(TMSEventTransferCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSEventTransferCreateViewModel, TMSEventTransfer>(Vm);
            _tMSEventTransferRepository.Add(entity);
            SaveChanges();
            return entity;
        }
        #endregion POST

        #region PUT
        public void Update(TMSEventTransferViewModel Vm)
        {
            var data = _mapper.Map<TMSEventTransferViewModel, TMSEventTransfer>(Vm);
            if (Vm.Id >= 1)
            {
                _tMSEventTransferRepository.Update(data);
            }
            else
            {
                _tMSEventTransferRepository.Add(data);
            }
            
            SaveChanges();
        }
        #endregion PUT
        private void SaveChanges()
        {
            _unitOfWork.SaveChanges();
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
