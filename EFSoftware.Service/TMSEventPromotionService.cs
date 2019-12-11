using AutoMapper;
using EFSoftware.Core;
using EFSoftware.Models.Models;
using EFSoftware.Repositories.Interfaces;
using EFSoftware.Repository.Interfaces;
using EFSoftware.Service.Interfaces;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EFSoftware.Service
{
    public class TMSEventPromotionService : ITMSEventPromotionService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSEventPromotionRepository _tMSEventPromotionRepository;
        private ITMSZoneLocationRepository _tMSZoneLocationRepository;
        private ITMSJobSiteRepository _tMSJobSiteRepository;
        private ITMSsiteRepository _tMSsiteRepository;
        private IDepartmentRepository _departmentRepository;

        public TMSEventPromotionService(IUnitOfWork unitOfWork, IMapper mapper, ITMSEventPromotionRepository tMSEventPromotionRepository,
            ITMSZoneLocationRepository tMSZoneLocationRepository, ITMSJobSiteRepository tMSJobSiteRepository,
            ITMSsiteRepository tMSsiteRepository, IDepartmentRepository departmentRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _tMSEventPromotionRepository = tMSEventPromotionRepository;
            _tMSZoneLocationRepository = tMSZoneLocationRepository;
            _tMSJobSiteRepository = tMSJobSiteRepository;
            _tMSsiteRepository = tMSsiteRepository;
            _departmentRepository = departmentRepository;
        }
        #endregion CTO

        #region GET
        public List<TMSEventPromotionViewModel> GetByEmployeeId(int employeeId)
        {
            var model = _tMSEventPromotionRepository.Find(x => x.EmployeeId == employeeId && x.DeleteFlag != DeleteFlg.Delete).ToList();
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
                            select new TMSEventPromotionViewModel
                            (m.Id, m.EmployeeId, m.EventType, m.EffectiveDate, m.Designation, m.DesignationType, m.EmployeeType, z.Id, m.ShiftId,
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

        public TMSEventPromotion Add(TMSEventPromotionCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSEventPromotionCreateViewModel, TMSEventPromotion>(Vm);
            _tMSEventPromotionRepository.Add(entity);
            SaveChanges();
            return entity;
        }
        #endregion POST

        #region PUT
        public void Update(TMSEventPromotionViewModel Vm)
        {
            var data = _mapper.Map<TMSEventPromotionViewModel, TMSEventPromotion>(Vm);
            if (Vm.Id >= 1)
            {
                _tMSEventPromotionRepository.Update(data);
            }
            else
            {
                _tMSEventPromotionRepository.Add(data);
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
