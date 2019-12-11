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
    public class TMSAllowanceJobsiteService : ITMSAllowanceJobsiteService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private ITMSAllowanceJobsiteRepository _tmsAllowanceJobsiteRepository;
        private ITMSAllowanceRepository _tmsAllowanceRepository;
        private readonly IMapper _mapper;

        public TMSAllowanceJobsiteService(IUnitOfWork unitOfWork, ITMSAllowanceJobsiteRepository tmsAllowanceJobsiteRepository, ITMSAllowanceRepository tmsAllowanceRepository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _tmsAllowanceJobsiteRepository = tmsAllowanceJobsiteRepository;
            _tmsAllowanceRepository = tmsAllowanceRepository;
            _mapper = mapper;
        }

        #endregion CTO

        #region GET

        public TMSAllowanceJobsiteViewModel GetById(int id)
        {
            var model = _tmsAllowanceJobsiteRepository.Get(id);
            return _mapper.Map<TMSAllowanceJobsite, TMSAllowanceJobsiteViewModel>(model);
        }

        public List<TMSAllowanceJobsiteViewModel> GetAll()
        {
            var data = _tmsAllowanceJobsiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSAllowanceJobsite>, List<TMSAllowanceJobsiteViewModel>>(data);
        }

        public PagedResult<TMSAllowanceJobsiteViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _tmsAllowanceJobsiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSAllowanceJobsite>, List<TMSAllowanceJobsiteViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSAllowanceJobsiteViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<TMSAllowanceJobsiteViewModel> GetAllWithCompany(int companyid)
        {
            var data = _tmsAllowanceJobsiteRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSAllowanceJobsite>, List<TMSAllowanceJobsiteViewModel>>(data);
        }

        public PagedResult<TMSAllowanceJobsiteViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid)
        {
            var query = _tmsAllowanceJobsiteRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete);

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSAllowanceJobsite>, List<TMSAllowanceJobsiteViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSAllowanceJobsiteViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<TMSAllowanceJobsiteViewModel> GetAllWithJobsite(int companyid, int jobsiteid, string filterByName = "")
        {
            var data = _tmsAllowanceJobsiteRepository.Find(x => x.CompanyId == companyid && x.JobsiteId == jobsiteid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Name.Contains(filterByName) || x.Code.Contains(filterByName) || x.Remarks.Contains(filterByName)
                || x.Amount.ToString().Contains(filterByName));
            }
            return _mapper.Map<List<TMSAllowanceJobsite>, List<TMSAllowanceJobsiteViewModel>>(data.ToList());
        }

        public PagedResult<TMSAllowanceJobsiteViewModel> GetAllPagingWithJobsite(int page, int pageSize, int companyid, int jobsiteid, string filterByName = "")
        {
            var query = _tmsAllowanceJobsiteRepository.Find(x => x.CompanyId == companyid && x.JobsiteId == jobsiteid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName) || x.Code.Contains(filterByName) || x.Remarks.Contains(filterByName)
                || x.Amount.ToString().Contains(filterByName));
            }
            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSAllowanceJobsite>, List<TMSAllowanceJobsiteViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSAllowanceJobsiteViewModel>()
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

        public TMSAllowanceJobsite Add(TMSAllowanceJobsiteCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSAllowanceJobsiteCreateViewModel, TMSAllowanceJobsite>(Vm);
            _tmsAllowanceJobsiteRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        public TMSAllowanceJobsite AddFromCompany(TMSAllowanceJobsiteCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSAllowanceJobsiteCreateViewModel, TMSAllowanceJobsite>(Vm);
            _tmsAllowanceJobsiteRepository.Add(entity);
            var allowanceCompany = _tmsAllowanceRepository.Get(Vm.AllowanceCompanyId);
            if (allowanceCompany != null)
            {
                allowanceCompany.Used = 1;
                if (string.IsNullOrEmpty(allowanceCompany.JobsiteUsed))
                {
                    allowanceCompany.JobsiteUsed = "";
                }
                List<string> listJobsiteUsed = allowanceCompany.JobsiteUsed.Split(';').ToList();
                if (!listJobsiteUsed.Contains(Vm.JobsiteId.ToString()))
                {
                    listJobsiteUsed.Add(Vm.JobsiteId.ToString());
                }
                allowanceCompany.JobsiteUsed = string.Join(";", listJobsiteUsed.ToArray());
                _tmsAllowanceRepository.Update(allowanceCompany);
            }
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSAllowanceJobsiteViewModel Vm)
        {
            var data = _mapper.Map<TMSAllowanceJobsiteViewModel, TMSAllowanceJobsite>(Vm);
            _tmsAllowanceJobsiteRepository.Update(data);
            SaveChanges();
        }

        #endregion PUT

        #region DELETE

        public void Delete(int id)
        {
            var itemallowancejobsite = _tmsAllowanceJobsiteRepository.Get(id);
            if (itemallowancejobsite.AllowanceCompanyId > 0)
            {
                var allowanceCompany = _tmsAllowanceRepository.Get(itemallowancejobsite.AllowanceCompanyId);
                if (allowanceCompany != null)
                {
                    if (string.IsNullOrEmpty(allowanceCompany.JobsiteUsed))
                    {
                        allowanceCompany.JobsiteUsed = "";
                    }
                    List<string> listJobsiteUsed = allowanceCompany.JobsiteUsed.Split(';').ToList();
                    if (listJobsiteUsed.Contains(itemallowancejobsite.JobsiteId.ToString()))
                    {
                        listJobsiteUsed.Remove(itemallowancejobsite.JobsiteId.ToString());
                    }
                    allowanceCompany.JobsiteUsed = string.Join(";", listJobsiteUsed.ToArray());
                    _tmsAllowanceRepository.Update(allowanceCompany);
                }
            }
            _tmsAllowanceJobsiteRepository.Remove(id);
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
