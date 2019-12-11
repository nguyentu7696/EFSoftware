using AutoMapper;
using AutoMapper.QueryableExtensions;
using EFSoftware.Core;
using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models;
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
    public class CompanyBasicInfoService : ICompanyBasicInfoService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private ICompanyBasicInfoRepository _companyBasicInfoRepository;
        private IDepartmentRepository _departmentRepository;
        private ITMSsiteRepository _siteRepository;
        private ITMSJobSiteRepository _jobSiteRepository;
        private ITMSEmployeeRepository _iTMSEmployeeRepository;
        private readonly IMapper _mapper;

        public CompanyBasicInfoService(IUnitOfWork unitOfWork, ITMSEmployeeRepository iTMSEmployeeRepository, ITMSJobSiteRepository jobSiteRepository, ITMSsiteRepository siteRepository, ICompanyBasicInfoRepository companyBasicInfoRepository, IDepartmentRepository departmentRepository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _companyBasicInfoRepository = companyBasicInfoRepository;
            _departmentRepository = departmentRepository;
            _siteRepository = siteRepository;
            _jobSiteRepository = jobSiteRepository;
            _iTMSEmployeeRepository = iTMSEmployeeRepository;
            _mapper = mapper;
        }

        #endregion CTO

        #region GET

        public CompanyBasicInfoViewModel GetById(int id)
        {
            var model = _companyBasicInfoRepository.Get(id);
            return _mapper.Map<CompanyBasicInfo, CompanyBasicInfoViewModel>(model);
        }

        public List<CompanyBasicInfoViewModel> GetAll(string filterByName = "")
        {
            var data = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
               data = data.Where(x => x.Name.Contains(filterByName) || x.Address.Contains(filterByName));
            }
            return _mapper.Map<List<CompanyBasicInfo>, List<CompanyBasicInfoViewModel>>(data.ToList());
        }

        public PagedResult<CompanyBasicInfoViewModel> GetAllPaging(int page, int pageSize, string filterByName)
        {
            var employee = _iTMSEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobsite = _jobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var company = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            var result = (from e in employee
                        join j in jobsite on e.JobSiteId equals j.Id
                        join s in site on j.SiteId equals s.Id
                        join d in department on s.DepartmentId equals d.Id
                        join c in company on d.CompanyId equals c.Id
                        select new TMSEmployeeListViewModel(e.Id, e.Nric, e.Empkey, e.EmpID, c.Name, e.Name, j.Name, c.Id, d.Id, s.Id, j.Id)).ToList();

            var query = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName) || x.Address.Contains(filterByName));
            }

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);
            
            var data = _mapper.Map<List<CompanyBasicInfo>, List<CompanyBasicInfoViewModel>>(query.ToList());

            var countCompany = data.Count();
            var countEmployee = result.Count();
            for(int i=0;i<countCompany;i++)
            {
                for(int j=0;j<countEmployee;j++)
                {
                    if(data[i].Id == result[j].CompanyId)
                    {
                        data[i].TotalEmployee += 1;
                    }
                }
            }

            var paginationSet = new PagedResult<CompanyBasicInfoViewModel>()
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

        public CompanyBasicInfo Add(CompanyBasicInfoViewModel Vm)
        {
            var entity = _mapper.Map<CompanyBasicInfoViewModel, CompanyBasicInfo>(Vm);
            _companyBasicInfoRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(CompanyBasicInfoViewModel Vm)
        {
            var data = _mapper.Map<CompanyBasicInfoViewModel, CompanyBasicInfo>(Vm);
            _companyBasicInfoRepository.Update(data);
            SaveChanges();
        }

        #endregion PUT

        #region DELETE

        public void Delete(int id)
        {
            _companyBasicInfoRepository.Remove(id);
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
