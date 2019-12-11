using AutoMapper;
using EFSoftware.Core;
using EFSoftware.Core.Shared.Dtos;
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
    public class TMSAttendanceService : ITMSAttendanceService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private ITMSAttendanceRepository _tmsAttendanceRepository;
        private IAttendanceRepository _attendanceRepository;
        private readonly IMapper _mapper;

        public TMSAttendanceService(IUnitOfWork unitOfWork, ITMSAttendanceRepository tmsAttendanceRepository, IAttendanceRepository attendanceRepository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _tmsAttendanceRepository = tmsAttendanceRepository;
            _attendanceRepository = attendanceRepository;
            _mapper = mapper;
        }

        #endregion CTO

        #region GET

        public TMSAttendanceViewModel GetById(int id)
        {
            var model = _tmsAttendanceRepository.Get(id);
            return _mapper.Map<TMSAttendance, TMSAttendanceViewModel>(model);
        }

        public List<TMSAttendanceViewModel> GetAll()
        {
            var data = _tmsAttendanceRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSAttendance>, List<TMSAttendanceViewModel>>(data);
        }

        public PagedResult<TMSAttendanceViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _tmsAttendanceRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSAttendance>, List<TMSAttendanceViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSAttendanceViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<TMSAttendanceViewModel> GetAllWithCompany(int companyid, string filterByName)
        {
            var data = _tmsAttendanceRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete).ToList();
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Name.Contains(filterByName) || x.Code.Contains(filterByName) || x.Value.Contains(filterByName)).ToList();
            }
            return _mapper.Map<List<TMSAttendance>, List<TMSAttendanceViewModel>>(data);
        }

        public PagedResult<TMSAttendanceViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName)
        {
            var query = _tmsAttendanceRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName) || x.Code.Contains(filterByName) || x.Value.Contains(filterByName));
            }
            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSAttendance>, List<TMSAttendanceViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSAttendanceViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        #endregion GET

        #region POST

        public TMSAttendance Add(TMSAttendanceCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSAttendanceCreateViewModel, TMSAttendance>(Vm);
            _tmsAttendanceRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        public TMSAttendance AddFromGlobal(TMSAttendanceCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSAttendanceCreateViewModel, TMSAttendance>(Vm);
            _tmsAttendanceRepository.Add(entity);
            var attendanceGlobal = _attendanceRepository.Get(Vm.AttendanceId);
            if(attendanceGlobal != null )
            {
                attendanceGlobal.Used = 1;
                if (string.IsNullOrEmpty(attendanceGlobal.CompanyUsed))
                {
                    attendanceGlobal.CompanyUsed = "";
                }
                List<string> listCompanyUsed = attendanceGlobal.CompanyUsed.Split(';').ToList();
                if (!listCompanyUsed.Contains(Vm.CompanyId.ToString()))
                {
                    listCompanyUsed.Add(Vm.CompanyId.ToString());
                }
                attendanceGlobal.CompanyUsed = string.Join(";", listCompanyUsed.ToArray());
                _attendanceRepository.Update(attendanceGlobal);
            }
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSAttendanceViewModel Vm)
        {
            var data = _mapper.Map<TMSAttendanceViewModel, TMSAttendance>(Vm);
            _tmsAttendanceRepository.Update(data);
            SaveChanges();
        }

        #endregion PUT

        #region DELETE

        public void Delete(int id)
        {
            var itemattendance = _tmsAttendanceRepository.Get(id);
            if(itemattendance.AttendanceId > 0)
            {
                var attendanceGlobal = _attendanceRepository.Get(itemattendance.AttendanceId);
                if (attendanceGlobal != null)
                {
                    if (string.IsNullOrEmpty(attendanceGlobal.CompanyUsed))
                    {
                        attendanceGlobal.CompanyUsed = "";
                    }
                    List<string> listCompanyUsed = attendanceGlobal.CompanyUsed.Split(';').ToList();
                    if (listCompanyUsed.Contains(itemattendance.CompanyId.ToString()))
                    {
                        listCompanyUsed.Remove(itemattendance.CompanyId.ToString());
                    }
                    attendanceGlobal.CompanyUsed = string.Join(";", listCompanyUsed.ToArray());
                    _attendanceRepository.Update(attendanceGlobal);
                }
            }
            _tmsAttendanceRepository.Remove(id);
            SaveChanges();
        }

        #endregion DELETE

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
