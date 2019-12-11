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
    public class TMSJobSiteService : ITMSJobSiteService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private ITMSJobSiteRepository _iTMSJobSiteRepository;
        private IDepartmentRepository _departmentRepository;
        private ICompanyBasicInfoRepository _companyBasicInfoRepository;
        private ITMSsiteRepository _siteRepository;

        private ITMSZoneLocationRepository _tmsZoneLocactionRespository;
        private ITMSEmployeeRepository _tmsEmployeeRepository;
        private ITMSAllowanceJobsiteRepository _tmsAllowanceJobsiteRepository;
        private ITMSOtSettingRepository _tmsOtSettingRepository;
        private ITMSShiftJobSiteRepository _tmsShiftJobSiteRepository;

        private readonly IMapper _mapper;

        public TMSJobSiteService(IUnitOfWork unitOfWork, ITMSJobSiteRepository iTMSJobSiteRepository, IMapper mapper, IDepartmentRepository departmentRepository, ITMSsiteRepository siteRepository,
            ICompanyBasicInfoRepository companyBasicInfoRepository, ITMSZoneLocationRepository tmsZoneLocactionRespository,
            ITMSEmployeeRepository tmsEmployeeRepository, ITMSAllowanceJobsiteRepository tmsAllowanceJobsiteRepository,
            ITMSOtSettingRepository tmsOtSettingRepository, ITMSShiftJobSiteRepository tmsShiftJobSiteRepository)
        {
            _unitOfWork = unitOfWork;
            _iTMSJobSiteRepository = iTMSJobSiteRepository;
            _mapper = mapper;
            _departmentRepository = departmentRepository;
            _companyBasicInfoRepository = companyBasicInfoRepository;
            _siteRepository = siteRepository;

            _tmsZoneLocactionRespository = tmsZoneLocactionRespository;
            _tmsEmployeeRepository = tmsEmployeeRepository;
            _tmsAllowanceJobsiteRepository = tmsAllowanceJobsiteRepository;
            _tmsOtSettingRepository = tmsOtSettingRepository;
            _tmsShiftJobSiteRepository = tmsShiftJobSiteRepository;
        }

        #endregion CTO

        #region GET

        public JobSiteUpdateModel GetById(int id)
        {
            var model = _iTMSJobSiteRepository.Get(id);
            return _mapper.Map<TMSJobSite, JobSiteUpdateModel>(model);
        }

        public List<JobSiteUpdateModel> GetAll(string filterByName = "")
        {

            var data = _iTMSJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Name.Contains(filterByName));
            }
            return _mapper.Map<List<TMSJobSite>, List<JobSiteUpdateModel>>(data.ToList());
        }

        public List<JobSiteUpdateModel> GetAllWithSite(int companyid, int departmentid, int siteid, string filterByName = "")
        {
            var data = _iTMSJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Name.Contains(filterByName));
            }
            if (companyid != 0)
            {
                data = data.Where(x => x.CompanyId == companyid);
            }
            if (departmentid != 0)
            {
                data = data.Where(x => x.DepartmentId == departmentid);
            }
            if (siteid != 0)
            {
                data = data.Where(x => x.SiteId == siteid);
            }
            return _mapper.Map<List<TMSJobSite>, List<JobSiteUpdateModel>>(data.ToList());
        }

        public PagedResult<JobSiteListModel> GetAllPaging(int page, int pageSize)
        {
            var site = _siteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobsite = _iTMSJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var company = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            try
            {
                var data = (from j in jobsite
                            join s in site on j.SiteId equals s.Id
                            join c in department on s.DepartmentId equals c.Id
                            join d in company on c.CompanyId equals d.Id
                            select new JobSiteListModel(j.Id, j.Name, s.Name, c.Name, d.Id, c.Id, s.Id)).OrderBy(x => x.Id).Skip((page - 1) * pageSize).Take(pageSize).ToList();
                int totalRow = data.Count();

                var paginationSet = new PagedResult<JobSiteListModel>()
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

        public PagedResult<JobSiteListModel> GetAllPagingWithSite(int page, int pageSize, int companyid, int departmentid, int siteid, string filterByName)
        {
            var query = _iTMSJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName));
            }
            if (companyid != 0)
            {
                query = query.Where(x => x.CompanyId == companyid);
            }
            
            if (departmentid != 0)
            {
                query = query.Where(x => x.DepartmentId == departmentid);
            }

            if (siteid != 0)
            {
                query = query.Where(x => x.SiteId == siteid);
            }


            var jobsite = query.ToList();
            var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var company = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            try
            {
                var data = (from j in jobsite
                            join s in site on j.SiteId equals s.Id
                            join c in department on j.DepartmentId equals c.Id
                            join d in company on j.CompanyId equals d.Id
                            select new JobSiteListModel(j.Id, j.Name, s.Name, c.Name, j.CompanyId, j.DepartmentId, j.SiteId)).OrderBy(x => x.Id).Skip((page - 1) * pageSize).Take(pageSize).ToList();
                int totalRow = data.Count();

                var paginationSet = new PagedResult<JobSiteListModel>()
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

        public List<TMSJobSiteViewModel> GetAllForDepartment(int siteid, int departmentid, string filterByName = "")
        {
            var data = _iTMSJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Name.Contains(filterByName));
            }
            if (siteid != 0)
            {
                data = data.Where(x => x.SiteId == siteid);
            }
            if (departmentid != 0)
            {
                data = data.Where(x => x.DepartmentId == departmentid);
            }

            return _mapper.Map<List<TMSJobSite>, List<TMSJobSiteViewModel>>(data.ToList());
        }

        public PagedResult<TMSJobSiteViewModel> GetAllPagingForDepartment(int page, int pageSize, int siteid, int departmentid, string filterByName)
        {
            var query = _iTMSJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName));
            }
            if (siteid != 0)
            {
                query = query.Where(x => x.SiteId == siteid);
            }
            if (departmentid != 0)
            {
                query = query.Where(x => x.DepartmentId == departmentid);
            }

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSJobSite>, List<TMSJobSiteViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSJobSiteViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<JobSiteListModel> GetAllListJobSite(int companyid, int departmentid, int siteid, string filterByName = "")
        {
            var company = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobsite = _iTMSJobSiteRepository.FindAll();

            if (!string.IsNullOrEmpty(filterByName))
            {
                jobsite = jobsite.Where(x => x.Name.Contains(filterByName));
            }
            if (companyid > 0)
            {
                company = company.Where(x => x.Id == companyid).ToList();
            }
            if (departmentid > 0)
            {
                department = department.Where(x => x.Id == departmentid).ToList();
            }
            if (siteid > 0)
            {
                site = site.Where(x => x.Id == siteid).ToList();
            }

            
            try
            {
                var data = (from j in jobsite
                            join s in site on j.SiteId equals s.Id
                            join d in department on s.DepartmentId equals d.Id
                            join c in company on d.CompanyId equals c.Id
                            select new JobSiteListModel(j.Id, j.Name, s.Name, d.Name, j.CompanyId, j.DepartmentId, j.SiteId)).ToList();

                return data;
            }
            catch
            {
                return null;
            }
        }

        public PagedResult<JobSiteListModel> GetAllPagingListJobSite(int page, int pageSize, int companyid, int departmentid, int siteid, string filterByName)
        {           
            var company = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobsite = _iTMSJobSiteRepository.FindAll();

            if (!string.IsNullOrEmpty(filterByName))
            {
                jobsite = jobsite.Where(x => x.Name.Contains(filterByName));
            }
            if (companyid != 0)
            {
                company = company.Where(x => x.Id == companyid).ToList();
            }

            if (departmentid != 0)
            {
                department = department.Where(x => x.Id == departmentid).ToList();
            }

            if (siteid != 0)
            {
                site = site.Where(x => x.Id == siteid).ToList();
            }

            try
            {
                var result = GetAllListJobSite(companyid, departmentid, siteid, filterByName);
                var data = (from j in jobsite
                            join s in site on j.SiteId equals s.Id
                            join d in department on s.DepartmentId equals d.Id
                            join c in company on d.CompanyId equals c.Id
                            select new JobSiteListModel(j.Id, j.Name, s.Name, d.Name, j.CompanyId, j.DepartmentId, j.SiteId))
                            .OrderBy(x => x.Id).Skip((page - 1) * pageSize).Take(pageSize).ToList();

                int totalRow = result.Count();

                var paginationSet = new PagedResult<JobSiteListModel>()
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

        #endregion GET

        #region POST

        public TMSJobSite Add(JobSiteViewModel Vm)
        {
            var entity = _mapper.Map<JobSiteViewModel, TMSJobSite>(Vm);
            _iTMSJobSiteRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(JobSiteUpdateModel Vm)
        {
            var data = _mapper.Map<JobSiteUpdateModel, TMSJobSite>(Vm);
            _iTMSJobSiteRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

        #region DELETE

        public string Delete(int id)
        {
            var listZoneLocactions = _tmsZoneLocactionRespository.Find(x => x.JobSiteId == id && x.DeleteFlag != DeleteFlg.Delete);
            if (listZoneLocactions.Count() > 0)
            {
                return MessageStatic.HaveChild;
            }

            var listAllowanceJobsites = _tmsAllowanceJobsiteRepository.Find(x => x.JobsiteId == id && x.DeleteFlag != DeleteFlg.Delete);
            if (listAllowanceJobsites.Count() > 0)
            {
                return MessageStatic.HaveChild;
            }

            var listOtSettings = _tmsAllowanceJobsiteRepository.Find(x => x.JobsiteId == id && x.DeleteFlag != DeleteFlg.Delete);
            if (listOtSettings.Count() > 0)
            {
                return MessageStatic.HaveChild;
            }

            var listShiftJobSites = _tmsShiftJobSiteRepository.Find(x => x.JobSiteId == id && x.DeleteFlag != DeleteFlg.Delete);
            if (listShiftJobSites.Count() > 0)
            {
                return MessageStatic.HaveChild;
            }

            _iTMSJobSiteRepository.Remove(id);
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
