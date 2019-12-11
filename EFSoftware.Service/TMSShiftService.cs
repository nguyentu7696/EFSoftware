using AutoMapper;
using EFSoftware.Core;
using EFSoftware.Core.Shared;
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
    public class TMSShiftService : ITMSShiftService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private ITMSShiftRepository _tmsShiftRepository;
        private ITMSShiftJobSiteRepository _tmsShiftJobSiteRepository;
        private readonly IMapper _mapper;

        public TMSShiftService(IUnitOfWork unitOfWork, ITMSShiftRepository tmsShiftRepository, ITMSShiftJobSiteRepository tmsShiftJobSiteRepository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _tmsShiftRepository = tmsShiftRepository;
            _tmsShiftJobSiteRepository = tmsShiftJobSiteRepository;
            _mapper = mapper;
        }

        #endregion CTO

        #region GET

        public TMSShiftViewModelV2 GetById(int id)
        {
            var model = _tmsShiftRepository.Get(id);
            return _mapper.Map<TMSShift, TMSShiftViewModelV2>(model);
        }

        public List<TMSShiftViewModel> GetAll()
        {
            var data = _tmsShiftRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSShift>, List<TMSShiftViewModel>>(data);
        }

        public PagedResult<TMSShiftViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _tmsShiftRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSShift>, List<TMSShiftViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSShiftViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<TMSShiftViewModel> GetAllWithCompany(int companyid, string filterByName = "")
        {
            var data = _tmsShiftRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != Core.DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.MainCode.Contains(filterByName));
            }
            return _mapper.Map<List<TMSShift>, List<TMSShiftViewModel>>(data.ToList());
        }

        public PagedResult<TMSShiftViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName = "")
        {
            var query = _tmsShiftRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != Core.DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.MainCode.Contains(filterByName));
            }
            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSShift>, List<TMSShiftViewModel>>(query.ToList());

            

            var paginationSet = new PagedResult<TMSShiftViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            
            return paginationSet;
        }

        public List<TMSShiftViewModel> GetAllActive()
        {
            var data = _tmsShiftRepository.Find(x => x.Status == Core.Status.Active && x.DeleteFlag != Core.DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSShift>, List<TMSShiftViewModel>>(data);
        }

        #endregion GET

        #region POST

        public TMSShift Add(TMSShiftViewModel Vm)
        {
            var entity = _mapper.Map<TMSShiftViewModel, TMSShift>(Vm);
            _tmsShiftRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSShiftViewModel Vm)
        {
            var data = _mapper.Map<TMSShiftViewModel, TMSShift>(Vm);
            _tmsShiftRepository.Update(data);
            SaveChanges();
        }

        #endregion PUT

        #region DELETE

        public string Delete(int id)
        {
            var listShiftJobsites = _tmsShiftJobSiteRepository.Find(x => x.ShiftId == id );
            if (listShiftJobsites.Count() > 0)
            {
                return MessageStatic.HaveChild;
            }
            _tmsShiftRepository.Remove(id);
            SaveChanges();
            return "";
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
