using AutoMapper;
using AutoMapper.QueryableExtensions;
using EFSoftware.Core;
using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Repositories.Interfaces;
using EFSoftware.Repository.Interfaces;
using EFSoftware.Service.Interfaces;
using EFSoftware.Service.Interfaces.ViewModels;
using EFSoftware.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EFSoftware.Service
{
    public class AttendanceService : IAttendanceService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private IAttendanceRepository _attendanceRepository;
        private readonly IMapper _mapper;

        public AttendanceService(IUnitOfWork unitOfWork, IAttendanceRepository attendanceRepository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _attendanceRepository = attendanceRepository;
            _mapper = mapper;
        }

        #endregion CTO

        #region GET

        public AttendanceViewModel GetById(int id)
        {
            var model = _attendanceRepository.Get(id);
            return _mapper.Map<Attendance, AttendanceViewModel>(model);
        }

        public List<AttendanceViewModel> GetAll(string filterByName = "", int orderByName = 0, int orderByCode = 0, int orderByValue = 0)
        {
            var data = _attendanceRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                //data = data.Where(x => x.Name.ToUpper() == filterByName.ToUpper());
                data = data.Where(x => x.Name.Contains(filterByName) || x.Value.Contains(filterByName) || x.Code.Contains(filterByName));
            }
            return _mapper.Map< List<Attendance>, List<AttendanceViewModel>>(data.ToList());
        }

        public List<AttendanceViewModel> GetAllActive(string filterByName = "", int orderByName = 0, int orderByCode = 0, int orderByValue = 0)
        {
            var data = _attendanceRepository.Find(x => x.Status == 1 && x.DeleteFlag != DeleteFlg.Delete);
            if(!string.IsNullOrEmpty(filterByName))
            {
                //data = data.Where(x => x.Name.ToUpper() == filterByName.ToUpper());
                data = data.Where(x => x.Name.Contains(filterByName) || x.Value.Contains(filterByName) || x.Code.Contains(filterByName));
            }
            if(orderByName == 1)
            {
                data = data.OrderBy(x => x.Name);

            } else if (orderByCode == -1)
            {
                data = data.OrderByDescending(x => x.Name);

            } else if(orderByCode == 1)
            {
                data = data.OrderBy(x => x.Code);
            } else if(orderByCode == -1)
            {
                data = data.OrderByDescending(x => x.Code);
            } else if(orderByValue == 1)
            {
                data = data.OrderBy(x => x.Value);
            } else if(orderByValue == -1)
            {
                data = data.OrderByDescending(x => x.Value);
            }
            return _mapper.Map<List<Attendance>, List<AttendanceViewModel>>(data.ToList());
        }

        public List<AttendanceViewModel> GetAllByUsedAndStatus()
        {
            var data = _attendanceRepository.Find(x => x.Used == 1 && x.Status == 1 && x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<Attendance>, List<AttendanceViewModel>>(data);
        }

        public PagedResult<AttendanceViewModel> GetAllPaging(int page, int pageSize, string filterByName = "", int orderByName = 0, int orderByCode = 0, int orderByValue = 0)
        {
            var query = _attendanceRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName) || x.Value.Contains(filterByName) || x.Code.Contains(filterByName));
            }

            int totalRow = query.Count();

            if (orderByName == 1)
            {
                query = query.OrderBy(x => x.Name);
            }
            else if (orderByName == -1)
            {
                query = query.OrderByDescending(x => x.Name);

            }
            else if (orderByCode == 1)
            {
                query = query.OrderBy(x => x.Code);
            }
            else if (orderByCode == -1)
            {
                query = query.OrderByDescending(x => x.Code);
            }
            else if (orderByValue == 1)
            {
                query = query.OrderBy(x => x.Value);
            }
            else if (orderByValue == -1)
            {
                query = query.OrderByDescending(x => x.Value);
            }

            query = query.Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<Attendance>, List<AttendanceViewModel>>(query.ToList());

            var paginationSet = new PagedResult<AttendanceViewModel>()
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

        public Attendance Add(AttendanceCreateViewModel Vm)
        {
            var entity = _mapper.Map<AttendanceCreateViewModel, Attendance>(Vm);
            _attendanceRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(AttendanceViewModel Vm)
        {
            var data = _mapper.Map<AttendanceViewModel, Attendance>(Vm);
            _attendanceRepository.Update(data);
            SaveChanges();
        }

        #endregion PUT

        #region DELETE

        public void Delete(int id)
        {
            _attendanceRepository.Remove(id);
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
