using AutoMapper;
using AutoMapper.QueryableExtensions;
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
    public class TMSsiteService : ITMSsiteService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private ITMSsiteRepository _tMSsiteRepository;
        private IDepartmentRepository _departmentRepository;
        private ICompanyBasicInfoRepository _companyRepository;
        private ITMSJobSiteRepository _tMSJobSiteRepository;
        private readonly IMapper _mapper;

        public TMSsiteService(IUnitOfWork unitOfWork, ICompanyBasicInfoRepository companyRepository, ITMSsiteRepository tMSsiteRepository, IMapper mapper, IDepartmentRepository departmentRepository,
            ITMSJobSiteRepository tMSJobSiteRepository)
        {
            _unitOfWork = unitOfWork;
            _tMSsiteRepository = tMSsiteRepository;
            _departmentRepository = departmentRepository;
            _mapper = mapper;
            _companyRepository = companyRepository;
            _tMSJobSiteRepository = tMSJobSiteRepository;
        }

        #endregion CTO

        #region GET

        public TMSsiteViewModel GetById(int id)
        {
            var model = _tMSsiteRepository.Get(id);
            return _mapper.Map<TMSsite, TMSsiteViewModel>(model);
        }

        public List<TMSsiteViewModel> GetAll()
        {
            var data = _tMSsiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSsite>, List<TMSsiteViewModel>>(data);
        }

        public PagedResult<TMSsiteViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _tMSsiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSsite>, List<TMSsiteViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSsiteViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<TMSsiteViewModel> GetAllForCompany(int departmentid, int companyid, string filterByName = "")
        {
            var department = _departmentRepository.FindAll();
            var company = _companyRepository.FindAll();
            var site = _tMSsiteRepository.FindAll();
            if (!string.IsNullOrEmpty(filterByName))
            {
                site = site.Where(x => x.Name.Contains(filterByName));
            }
            //var site = _tMSsiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            
           
            if (departmentid != 0)
            {
                department = department.Where(x => x.Id == departmentid);
            }
            if (companyid != 0)
            {
                company = company.Where(x => x.Id == companyid);
            }

            var data = (from s in site
                         join d in department on s.DepartmentId equals d.Id
                         join c in company on d.CompanyId equals c.Id
                         select s);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Name.Contains(filterByName));
            }
            return _mapper.Map<List<TMSsite>, List<TMSsiteViewModel>>(data.ToList());
        }

        public PagedResult<TMSsiteViewModel> GetAllPagingForCompany(int page, int pageSize, int departmentid, int companyid, string filterByName = "")
        {
            //var query = _tMSsiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            //var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            //var company = _companyRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            //var site = _tMSsiteRepository.FindAll();
            //if (!string.IsNullOrEmpty(filterByName))
            //{
            //    site = site.Where(x => x.Name.Contains(filterByName));
            //}

            //if (departmentid != 0)
            //{
            //    department = department.Where(x => x.Id == departmentid);
            //}
            //if (companyid != 0)
            //{
            //    company = company.Where(x => x.Id == companyid);
            //}

            //var query = (from s in site
            //            join d in department on s.DepartmentId equals d.Id
            //            join c in company on d.CompanyId equals c.Id
            //            select s);

            //int totalRow = query.Count();

            //query = query.OrderBy(x => x.Id)
            //    .Skip((page - 1) * pageSize).Take(pageSize);

            //var data = _mapper.Map<List<TMSsite>, List<TMSsiteViewModel>>(query.ToList());

            //var paginationSet = new PagedResult<TMSsiteViewModel>()
            //{
            //    Results = data,
            //    CurrentPage = page,
            //    RowCount = totalRow,
            //    PageSize = pageSize
            //};
            //return paginationSet;
            var data = GetAllForCompany(departmentid, companyid, filterByName);
            if (data == null)
            {
                return null;
            }
            int totalRow = data.Count();
            var paginationSet = new PagedResult<TMSsiteViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<SiteViewModel> GetListSite()
        {
            var site = _tMSsiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var company = _companyRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            try
            {
                var data = (from s in site
                            join d in department on s.DepartmentId equals d.Id
                            join c in company on d.CompanyId equals c.Id
                            select new SiteViewModel(s.Id, s.Name, c.Name, d.Name)).ToList();
                            
                return data;
            }
            catch
            {
                return null;
            }
        }

        public PagedResult<SiteViewModel> GetListSitePaging(int page, int pageSize)
        {
            var data = GetListSite();
            if (data == null)
            {
                return null;
            }
            int totalRow = data.Count();
            var paginationSet = new PagedResult<SiteViewModel>()
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

        public TMSsite Add(TMSsiteViewModel Vm)
        {
            var entity = _mapper.Map<TMSsiteViewModel, TMSsite>(Vm);
            _tMSsiteRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSsiteViewModel Vm)
        {
            var data = _mapper.Map<TMSsiteViewModel, TMSsite>(Vm);
            _tMSsiteRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

        #region DELETE

        public string Delete(int id)
        {
            var listJobSites = _tMSJobSiteRepository.Find(x => x.SiteId == id && x.DeleteFlag != 1);
            if (listJobSites.Count() > 0)
            {
                return MessageStatic.HaveChild;
            }

            _tMSsiteRepository.Remove(id);
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
