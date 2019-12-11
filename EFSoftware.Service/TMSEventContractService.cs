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
using System.Text;

namespace EFSoftware.Service
{
    public class TMSEventContractService : ITMSEventContractService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSEventContractRepository _tMSEventContractRepository;
        private ITMSZoneLocationRepository _tMSZoneLocationRepository;
        private ITMSJobSiteRepository _tMSJobSiteRepository;
        private ITMSsiteRepository _tMSsiteRepository;
        private IDepartmentRepository _departmentRepository;

        public TMSEventContractService(IUnitOfWork unitOfWork, IMapper mapper, ITMSEventContractRepository tMSEventContractRepository,
            ITMSZoneLocationRepository tMSZoneLocationRepository, ITMSJobSiteRepository tMSJobSiteRepository,
            ITMSsiteRepository tMSsiteRepository, IDepartmentRepository departmentRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _tMSEventContractRepository = tMSEventContractRepository;
            _tMSZoneLocationRepository = tMSZoneLocationRepository;
            _tMSJobSiteRepository = tMSJobSiteRepository;
            _departmentRepository = departmentRepository;
        }
        #endregion CTO

        #region GET
        public List<TMSEventContractViewModel> GetByEmployeeId(int employeeId)
        {
            var model = _tMSEventContractRepository.Find(x => x.EmployeeId == employeeId && x.DeleteFlag != DeleteFlg.Delete).ToList();
            var zoneLocation = _tMSZoneLocationRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobsite = _tMSJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            try
            {
                var data = (from m in model
                            join z in zoneLocation on m.ZoneLocationId equals z.Id
                            join j in jobsite on z.JobSiteId equals j.Id
                            join d in department on j.DepartmentId equals d.Id
                            select new TMSEventContractViewModel
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

        public TMSEventContract Add(TMSEventContractCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSEventContractCreateViewModel, TMSEventContract>(Vm);
            _tMSEventContractRepository.Add(entity);
            SaveChanges();
            return entity;
        }
        #endregion POST

        #region PUT
        public void Update(TMSEventContractViewModel Vm)
        {
            var data = _mapper.Map<TMSEventContractViewModel, TMSEventContract>(Vm);
            if(Vm.Id >= 1)
            {
                _tMSEventContractRepository.Update(data);
            }
            else
            {
                _tMSEventContractRepository.Add(data);
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

