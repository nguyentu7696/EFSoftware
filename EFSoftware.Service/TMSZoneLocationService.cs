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
    public class TMSZoneLocationService : ITMSZoneLocationService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private ITMSZoneLocationRepository _tmsZoneLocationRepository;
        private readonly IMapper _mapper;
        private ITMSJobSiteRepository _tmsJobSiteRepository;
        private ICompanyBasicInfoRepository _companyRepo;
        private IDepartmentRepository _departmentRepo;
        private ITMSsiteRepository _siteRepo;
        private ITMSZoneRepository _tmsZoneRepository;

        public TMSZoneLocationService(IUnitOfWork unitOfWork, ITMSZoneLocationRepository tmsZoneLocationRepository, IMapper mapper, ITMSJobSiteRepository tmsJobSiteRepository,
            ICompanyBasicInfoRepository companyRepo, IDepartmentRepository departmentRepo, ITMSsiteRepository siteRepo, ITMSZoneRepository tmsZoneRepository)
        {
            _unitOfWork = unitOfWork;
            _tmsZoneLocationRepository = tmsZoneLocationRepository;
            _mapper = mapper;
            _tmsJobSiteRepository = tmsJobSiteRepository;
            _companyRepo = companyRepo;
            _departmentRepo = departmentRepo;
            _siteRepo = siteRepo;
            _tmsZoneRepository = tmsZoneRepository;
        }

        #endregion CTO

        #region GET
        public TMSZoneLocationViewModel GetById(int id)
        {
            var model = _tmsZoneLocationRepository.Get(id);
            return _mapper.Map<TMSZoneLocation, TMSZoneLocationViewModel>(model);
        }

        public DepartmentSiteModel GetByJobsiteId(int id)
        {
            var result = new DepartmentSiteModel();
            var jobsite = _tmsJobSiteRepository.Get(id);
            result.SiteId = jobsite.SiteId;
            var site = _siteRepo.Get(result.SiteId);
            result.DepartmentId = site.DepartmentId;
            return result;
        }

        public List<TMSZoneLocationViewModelV2> GetAll(int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {

            var company = _companyRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            var department = _departmentRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            var site = _siteRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            var jobSite = _tmsJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            var zoneLocation = _tmsZoneLocationRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            if (!string.IsNullOrEmpty(filterByName))
            {
                zoneLocation = zoneLocation.Where(x => (x.Name != null) ? x.Name.Contains(filterByName) : false);
            }

            if (companyid != 0)
            {
                company = company.Where(x => x.Id == companyid);
            }
            if (departmentid != 0)
            {
                department = department.Where(x => x.Id == departmentid);
            }
            if (siteid != 0)
            {
                site = site.Where(x => x.Id == siteid);
            }
            if (jobsiteid != 0)
            {
                jobSite = jobSite.Where(x => x.Id == jobsiteid);
            }

            try
            {
                var result = (from zl in zoneLocation
                              join js in jobSite on zl.JobSiteId equals js.Id
                              join s in site on js.SiteId equals s.Id
                              join d in department on s.DepartmentId equals d.Id
                              join c in company on d.CompanyId equals c.Id

                              select new TMSZoneLocationViewModelV2
                              {
                                  Id = zl.Id,
                                  Name = zl.Name,
                                  Status = zl.Status,
                                  CreatedDate = zl.CreatedDate
                              }).ToList();
                return result;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public PagedResult<TMSZoneLocationViewModelV2> GetAllWithJobSite(int page, int pageSize, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            var company = _companyRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            var department = _departmentRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            var site = _siteRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            var jobSite = _tmsJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            var zoneLocation = _tmsZoneLocationRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            if (!string.IsNullOrEmpty(filterByName))
            {
                zoneLocation = zoneLocation.Where(x => (x.Name != null) ? x.Name.Contains(filterByName) : false);
            }

            if (companyid != 0)
            {
                company = company.Where(x => x.Id == companyid);
            }
            if (departmentid != 0)
            {
                department = department.Where(x => x.Id == departmentid);
            }
            if (siteid != 0)
            {
                site = site.Where(x => x.Id == siteid);
            }
            if (jobsiteid != 0)
            {
                jobSite = jobSite.Where(x => x.Id == jobsiteid);
            }

            var result = (from zl in zoneLocation
                          join js in jobSite on zl.JobSiteId equals js.Id
                          join s in site on js.SiteId equals s.Id
                          join d in department on s.DepartmentId equals d.Id
                          join c in company on d.CompanyId equals c.Id

                          select new TMSZoneLocationViewModelV2
                          {
                              Id = zl.Id,
                              Name = zl.Name,
                              Status = zl.Status,
                              CreatedDate = zl.CreatedDate,
                              JobSiteId = js.Id
                      }).OrderBy(p => p.CreatedDate).Skip((page - 1) * pageSize).Take(pageSize).ToList();

            int totalRow = result.Count();
            var paginationSet = new PagedResult<TMSZoneLocationViewModelV2>()
            {
                Results = result,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;

        }

        public List<TMSZoneLocationViewModel> GetListWithJobSite(int jobsiteid)
        {
            var data = _tmsZoneLocationRepository.Find(x => x.JobSiteId == jobsiteid && x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSZoneLocation>, List<TMSZoneLocationViewModel>>(data);
        }

        #endregion GET

        #region POST

        public TMSZoneLocation Add(TMSZoneLocationCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSZoneLocationCreateViewModel, TMSZoneLocation>(Vm);
            _tmsZoneLocationRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSZoneLocationViewModel Vm)
        {
            var data = _mapper.Map<TMSZoneLocationViewModel, TMSZoneLocation>(Vm);
            _tmsZoneLocationRepository.Update(data);
            SaveChanges();
        }

        #endregion PUT

        #region DELETE

        public string Delete(int id)
        {
            var listZoneLocation = _tmsZoneRepository.Find(x => x.ZoneLocationId == id && x.DeleteFlag != DeleteFlg.Delete);
            if (listZoneLocation.Count() > 0)
            {
                return MessageStatic.HaveChild;
            }
            _tmsZoneLocationRepository.Remove(id);
            SaveChanges();
            return null;
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
