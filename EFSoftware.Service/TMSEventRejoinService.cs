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
    public class TMSEventRejoinService : ITMSEventRejoinService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSEventRejoinRepository _tMSEventRejoinRepository;
        private ITMSZoneLocationRepository _tMSZoneLocationRepository;
        private ITMSJobSiteRepository _tMSJobSiteRepository;
        private ITMSsiteRepository _tMSsiteRepository;
        private IDepartmentRepository _departmentRepository;
        public TMSEventRejoinService(IUnitOfWork unitOfWork, IMapper mapper, ITMSEventRejoinRepository tMSEventRejoinRepository,
            ITMSZoneLocationRepository tMSZoneLocationRepository, ITMSJobSiteRepository tMSJobSiteRepository,
            ITMSsiteRepository tMSsiteRepository, IDepartmentRepository departmentRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _tMSEventRejoinRepository = tMSEventRejoinRepository;
            _tMSZoneLocationRepository = tMSZoneLocationRepository;
            _tMSJobSiteRepository = tMSJobSiteRepository;
            _tMSsiteRepository = tMSsiteRepository;
            _departmentRepository = departmentRepository;
        }
        #endregion CTO

        #region GET
        public List<TMSEventRejoinViewModel> GetByEmployeeId(int employeeId)
        {
            var model = _tMSEventRejoinRepository.Find(x => x.EmployeeId == employeeId && x.DeleteFlag != DeleteFlg.Delete).ToList();
            var zoneLocation = _tMSZoneLocationRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _tMSsiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobsite = _tMSJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            try
            {
                var data = (from m in model
                            join z in zoneLocation on m.ZoneLocationId equals z.Id
                            join j in jobsite on z.JobSiteId equals j.Id
                            join s in site on j.SiteId equals s.Id
                            join d in department on s.DepartmentId equals d.Id
                            select new TMSEventRejoinViewModel
                            (m.Id, m.EmployeeId, m.EventType, m.EffectiveDate, m.EmpKey, m.EmpId, z.Id, m.ShiftId,
                            m.ShiftKey, m.SubContractor, m.Recall, m.Remarks, m.EligibilityShift, m.EligibilityAllowance, m.MealAllowanceId,
                            m.MealAllowanceValue, m.MonthlyShiftAllowanceId, m.MonthlyShiftAllowanceValue, m.EligibilityOt, m.MaxWorkingHours,
                            m.OtPhId, m.OtPhValue, m.OtRdId, m.OtRdValue, m.OtOId, m.OtOValue, m.OtStdId, m.OtStdValue, m.TransportAllowanceId,
                            m.TransportAllowanceValue, m.Status, z.Name, j.Id, j.Name, s.Id, s.Name, d.Id, d.Name)).ToList();
                return data;
            }
            catch
            {
                return null;
            }
        }

        #endregion GET
        
        #region POST

        public TMSEventRejoin Add(TMSEventRejoinCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSEventRejoinCreateViewModel, TMSEventRejoin>(Vm);
            _tMSEventRejoinRepository.Add(entity);
            SaveChanges();
            return entity;
        }
        #endregion POST

        #region PUT
        public void Update(TMSEventRejoinViewModel Vm)
        {
            var data = _mapper.Map<TMSEventRejoinViewModel, TMSEventRejoin>(Vm);
            if(Vm.Id > 0)
            {
                _tMSEventRejoinRepository.Update(data);
            }
            else
            {
                _tMSEventRejoinRepository.Add(data);
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
