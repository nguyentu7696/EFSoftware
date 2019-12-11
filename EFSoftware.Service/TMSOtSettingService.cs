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
    public class TMSOtSettingService : ITMSOtSettingService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSOtSettingRepository _tMSOtSettingRepository;
        public TMSOtSettingService(IUnitOfWork unitOfWork, IMapper mapper, ITMSOtSettingRepository tMSOtSettingRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _tMSOtSettingRepository = tMSOtSettingRepository;
        }
        #endregion CTO

        #region GET

        public TMSOtSettingGetIdViewModel GetById(int id)
        {
            var model = _tMSOtSettingRepository.Get(id);
            return _mapper.Map<TMSOtSetting, TMSOtSettingGetIdViewModel>(model);
        }

        public List<TMSOtSettingViewModel> GetAll()
        {
            var data = _tMSOtSettingRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSOtSetting>, List<TMSOtSettingViewModel>>(data);
        }

        public List<TMSOtSettingViewModel> GetAllWithCompany(int compnayid)
        {
            var data = _tMSOtSettingRepository.Find(x => x.CompanyId == compnayid && x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSOtSetting>, List<TMSOtSettingViewModel>>(data);
        }

        public PagedResult<TMSOtSettingViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _tMSOtSettingRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSOtSetting>, List<TMSOtSettingViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSOtSettingViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public PagedResult<TMSOtSettingViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid)
        {
            var query = _tMSOtSettingRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete);

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSOtSetting>, List<TMSOtSettingViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSOtSettingViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };

            var count = paginationSet.Results.Count;
            var value = paginationSet.Results;

            //for (int i = 0; i < count; i++)
            //{
            //    if (value[i].Remarks == Core.Remarks.Flat)
            //    {
            //        paginationSet.Results[i].Remark = "Flat Rate (export by hr)";
            //    }
            //    if (value[i].Remarks == Core.Remarks.PhDay)
            //    {
            //        paginationSet.Results[i].Remark = "PH (export by Day)";
            //    }
            //    if (value[i].Remarks == Core.Remarks.PhHour)
            //    {
            //        paginationSet.Results[i].Remark = "PH (export by hr)";
            //    }
            //    if (value[i].Remarks == Core.Remarks.RdDay)
            //    {
            //        paginationSet.Results[i].Remark = "RD (export by Day)";
            //    }
            //    if (value[i].Remarks == Core.Remarks.RdHour)
            //    {
            //        paginationSet.Results[i].Remark = "RD (export by hr)";
            //    }
            //    if (value[i].Remarks == Core.Remarks.Std)
            //    {
            //        paginationSet.Results[i].Remark = "STD (export by hr)";
            //    }
            //}

            return paginationSet;
        }

        public List<TMSOtSettingViewModel> GetAllWithJobSiteByRemark(int companyid, int jobsiteid, int remark)
        {
            var data = _tMSOtSettingRepository.Find(x => x.CompanyId == companyid && x.JobsiteId == jobsiteid && x.Remarks == (Remarks)remark && x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSOtSetting>, List<TMSOtSettingViewModel>>(data);
        }

        public List<TMSOtSettingViewModel> GetAllWithJobSite(int compnayid, int jobsiteid, string filterByName = "")
        {
            var data = _tMSOtSettingRepository.Find(x => x.CompanyId == compnayid && x.JobsiteId == jobsiteid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                 data = data.Where(x => x.Payroll.Contains(filterByName) || x.PayrollCode.Contains(filterByName));
            }
            return _mapper.Map<List<TMSOtSetting>, List<TMSOtSettingViewModel>>(data.ToList());
        }

        public PagedResult<TMSOtSettingViewModel> GetAllPagingWithJobSite(int page, int pageSize, int companyid, int jobsiteid, string filterByName = "")
        {
            var query = _tMSOtSettingRepository.Find(x => x.CompanyId == companyid && x.JobsiteId == jobsiteid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Payroll.Contains(filterByName) || x.PayrollCode.Contains(filterByName));
            }
            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSOtSetting>, List<TMSOtSettingViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSOtSettingViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };

            var count = paginationSet.Results.Count;
            var value = paginationSet.Results;
            //for (int i = 0; i < count; i++)
            //{
            //    if (value[i].Remarks == Core.Remarks.Flat)
            //    {
            //        paginationSet.Results[i].Remark = "Flat Rate (export by hr)";
            //    }
            //    if (value[i].Remarks == Core.Remarks.PhDay)
            //    {
            //        paginationSet.Results[i].Remark = "PH (export by Day)";
            //    }
            //    if (value[i].Remarks == Core.Remarks.PhHour)
            //    {
            //        paginationSet.Results[i].Remark = "PH (export by hr)";
            //    }
            //    if (value[i].Remarks == Core.Remarks.RdDay)
            //    {
            //        paginationSet.Results[i].Remark = "RD (export by Day)";
            //    }
            //    if (value[i].Remarks == Core.Remarks.RdHour)
            //    {
            //        paginationSet.Results[i].Remark = "RD (export by hr)";
            //    }
            //    if (value[i].Remarks == Core.Remarks.Std)
            //    {
            //        paginationSet.Results[i].Remark = "STD (export by hr)";
            //    }
            //}

            return paginationSet;
        }

        #endregion GET

        #region POST

        public TMSOtSetting Add(TMSOtSettingCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSOtSettingCreateViewModel, TMSOtSetting>(Vm);
            _tMSOtSettingRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSOtSettingViewModel Vm)
        {
            var data = _mapper.Map<TMSOtSettingViewModel, TMSOtSetting>(Vm);
            _tMSOtSettingRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

        #region DELETE
        public void Delete(int id)
        {
            _tMSOtSettingRepository.Remove(id);
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
