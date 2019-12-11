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
    public class TMSAllowanceService : ITMSAllowanceService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private ITMSAllowanceRepository _tmsAllowanceRepository;
        private ITMSAllowanceJobsiteRepository _tmsAllowanceJobSiteRepository;
        private readonly IMapper _mapper;

        public TMSAllowanceService(IUnitOfWork unitOfWork, ITMSAllowanceRepository tmsAllowanceRepository, ITMSAllowanceJobsiteRepository tmsAllowanceJobSiteRepository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _tmsAllowanceRepository = tmsAllowanceRepository;
            _tmsAllowanceJobSiteRepository = tmsAllowanceJobSiteRepository;
            _mapper = mapper;
        }

        #endregion CTO

        #region GET

        public TMSAllowanceViewModel GetById(int id)
        {
            var model = _tmsAllowanceRepository.Get(id);
            return _mapper.Map<TMSAllowance, TMSAllowanceViewModel>(model);
        }

        public List<TMSAllowanceViewModel> GetAll()
        {
            var data = _tmsAllowanceRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSAllowance>, List<TMSAllowanceViewModel>>(data);
        }

        public PagedResult<TMSAllowanceViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _tmsAllowanceRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSAllowance>, List<TMSAllowanceViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSAllowanceViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<TMSAllowanceViewModel> GetAllWithCompany(int companyid, string filterByName = "")
        {
            var data = _tmsAllowanceRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Description.Contains(filterByName) || x.Code.Contains(filterByName) 
                || x.Remarks.Contains(filterByName) || x.Amount.ToString().Contains(filterByName));
            }
            return _mapper.Map<List<TMSAllowance>, List<TMSAllowanceViewModel>>(data.ToList());
        }

        public PagedResult<TMSAllowanceViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName = "")
        {
            var query = _tmsAllowanceRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Description.Contains(filterByName) || x.Code.Contains(filterByName) 
                || x.Remarks.Contains(filterByName) || x.Amount.ToString().Contains(filterByName));
            }
            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSAllowance>, List<TMSAllowanceViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSAllowanceViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<TMSAllowanceViewModel> GetAllActive()
        {
            var data = _tmsAllowanceRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSAllowance>, List<TMSAllowanceViewModel>>(data);
        }

        #endregion GET

        #region POST

        public TMSAllowance Add(TMSAllowanceViewModel Vm)
        {
            var entity = _mapper.Map<TMSAllowanceViewModel, TMSAllowance>(Vm);
            _tmsAllowanceRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSAllowanceViewModel Vm)
        {
            var data = _mapper.Map<TMSAllowanceViewModel, TMSAllowance>(Vm);
            _tmsAllowanceRepository.Update(data);
            SaveChanges();
        }

        #endregion PUT

        #region DELETE

        public string Delete(int id)
        {
            var listAllowanceJobSites = _tmsAllowanceJobSiteRepository.Find(x => x.AllowanceCompanyId == id);
            if (listAllowanceJobSites.Count() > 0)
            {
                return MessageStatic.HaveChild;
            }
            _tmsAllowanceRepository.Remove(id);
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
