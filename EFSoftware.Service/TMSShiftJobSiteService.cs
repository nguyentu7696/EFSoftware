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
    public class TMSShiftJobSiteService : ITMSShiftJobSiteService
    {
        #region CTO
        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSShiftJobSiteRepository _itmsShiftJobSiteRepository;
        private ITMSShiftRepository _tmsShiftRepository;

        public TMSShiftJobSiteService(IUnitOfWork unitOfWork, IMapper mapper, ITMSShiftJobSiteRepository itmsShiftJobSiteRepository, ITMSShiftRepository tmsShiftRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _itmsShiftJobSiteRepository = itmsShiftJobSiteRepository;
            _tmsShiftRepository = tmsShiftRepository;
        }
        #endregion CTO

        #region GET

        public TMSShiftJobSiteViewModel GetById(int id)
        {
            var model = _itmsShiftJobSiteRepository.Get(id);
            return _mapper.Map<TMSShiftJobSite, TMSShiftJobSiteViewModel>(model);
        }

        public List<TMSShiftJobSiteViewModel> GetAll()
        {
            var data = _itmsShiftJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSShiftJobSite>, List<TMSShiftJobSiteViewModel>>(data);
        }

        public PagedResult<TMSShiftJobSiteViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _itmsShiftJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            int totalRow = query.Count();

            try
            {
                var data = _mapper.Map<List<TMSShiftJobSite>, List<TMSShiftJobSiteViewModel>>(query);

                var paginationSet = new PagedResult<TMSShiftJobSiteViewModel>()
                {
                    Results = data,
                    CurrentPage = page,
                    RowCount = totalRow,
                    PageSize = pageSize
                };
                return paginationSet;
            }
            catch
            {
                return null;
            }
        }

        public List<TMSShiftJobSiteViewModel> GetAllWithJobSite(int jobsiteid, string filterByName = "")
        {
            var data = _itmsShiftJobSiteRepository.Find(x => x.JobSiteId == jobsiteid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => (x.MainCode != null) ? x.MainCode.Contains(filterByName) : false || (x.SubCode != null) ? x.SubCode.Contains(filterByName) : false
                || (x.Value != null) ? x.Value.Contains(filterByName) : false || (x.Remarks != null) ? x.Remarks.Contains(filterByName) : false);
            }
            return _mapper.Map<List<TMSShiftJobSite>, List<TMSShiftJobSiteViewModel>>(data.ToList());
        }


        public List<TMSShiftJobSiteViewModelV2> GetAllWithJobSiteRoster(int jobsiteid, string filterByName = "")
        {
            var shiftJobsite = _itmsShiftJobSiteRepository.Find(x => x.JobSiteId == jobsiteid && x.DeleteFlag != DeleteFlg.Delete);

            var shiftCompany = _tmsShiftRepository.GetAll().ToList();

            if (!string.IsNullOrEmpty(filterByName))
            {
                shiftJobsite = shiftJobsite.Where(x => (x.MainCode != null) ? x.MainCode.Contains(filterByName) : false || (x.SubCode != null) ? x.SubCode.Contains(filterByName) : false
                || (x.Value != null) ? x.Value.Contains(filterByName) : false || (x.Remarks != null) ? x.Remarks.Contains(filterByName) : false).ToList();
            }

            var result = (from sj in shiftJobsite
                          join sc in shiftCompany on sj.ShiftId equals sc.Id into tmpShiftCompany
                          from shiftCompanyLeftJoin in tmpShiftCompany.DefaultIfEmpty()
                          select new TMSShiftJobSiteViewModelV2()
                          {
                              Id = sj.Id,
                              SubCode = sj.SubCode,
                              MainCode = sj.ShiftId == 0 ? sj.MainCode : shiftCompanyLeftJoin.MainCode,
                              Remarks = sj.Remarks,
                              Value = sj.Value,
                              Status = sj.Status == 1 ? "Active" : "InActive"
                          }).OrderBy(x => x.Id);
            return result.ToList();
        }



        public PagedResult<TMSShiftJobSiteViewModelV2> GetAllPagingWithJobSite(int page, int pageSize, int jobsiteid,string filterByName = "")
        {
            var shiftJobsite = _itmsShiftJobSiteRepository.Find(x => x.JobSiteId == jobsiteid && x.DeleteFlag != DeleteFlg.Delete).ToList();
       
            var shiftCompany = _tmsShiftRepository.GetAll().ToList();

            if (!string.IsNullOrEmpty(filterByName))
            {
                shiftJobsite = shiftJobsite.Where(x => (x.MainCode != null) ? x.MainCode.Contains(filterByName) : false || (x.SubCode != null) ? x.SubCode.Contains(filterByName) : false
                || (x.Value != null) ? x.Value.Contains(filterByName) : false || (x.Remarks != null) ? x.Remarks.Contains(filterByName) : false).ToList();
            }

            //if (!string.IsNullOrEmpty(filterByName))
            //{
            //    shiftJobsite = shiftJobsite.Where(x => x.MainCode != null).ToList();
            //    shiftJobsite = shiftJobsite.Where(x => x.MainCode.Contains(filterByName)).ToList();
            //}

            //if (!string.IsNullOrEmpty(filterByName))
            //{
            //    shiftJobsite = shiftJobsite.Where(x => x.SubCode != null).ToList();
            //    shiftJobsite = shiftJobsite.Where(x => x.SubCode.Contains(filterByName)).ToList();
            //}

            //if (!string.IsNullOrEmpty(filterByName))
            //{
            //    shiftJobsite = shiftJobsite.Where(x => x.Value != null).ToList();
            //    shiftJobsite = shiftJobsite.Where(x => x.Value.Contains(filterByName)).ToList();
            //}

            var result = (from sj in shiftJobsite
                         join sc in shiftCompany on sj.ShiftId equals sc.Id into tmpShiftCompany
                         from shiftCompanyLeftJoin in tmpShiftCompany.DefaultIfEmpty()
                         select new TMSShiftJobSiteViewModelV2()
                         {
                             Id = sj.Id,
                             SubCode = sj.SubCode,
                             MainCode = sj.ShiftId == 0 ? sj.MainCode : shiftCompanyLeftJoin.MainCode,
                             Remarks = sj.Remarks,
                             Value = sj.Value,
                             Status = sj.Status == 1 ? "Active" : "InActive"
                         }).OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize).ToList();

            
            int totalRow = shiftJobsite.Count();

            var paginationSet = new PagedResult<TMSShiftJobSiteViewModelV2>()
            {
                Results = result,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<string> GetListWorkingHours()
        {
            var data = _itmsShiftJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var result = new List<string>();
            var count = data.Count();
            for (var i = 0; i < count; i++)
            {
                result.Add(data[i].MainCode + " - (" + data[i].StartHours + " to " + data[i].EndHours + ")");
            }
            return result;
        }


        #endregion GET

        #region POST

        public TMSShiftJobSite Add(TMSShiftJobSiteCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSShiftJobSiteCreateViewModel, TMSShiftJobSite>(Vm);
            _itmsShiftJobSiteRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        public TMSShiftJobSite AddFromCompany(TMSShiftJobSiteCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSShiftJobSiteCreateViewModel, TMSShiftJobSite>(Vm);
            _itmsShiftJobSiteRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSShiftJobSiteViewModel Vm)
        {
            var data = _mapper.Map<TMSShiftJobSiteViewModel, TMSShiftJobSite>(Vm);
            _itmsShiftJobSiteRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

        #region DELETE

        public void Delete(int id)
        {
            _itmsShiftJobSiteRepository.Remove(id);
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
