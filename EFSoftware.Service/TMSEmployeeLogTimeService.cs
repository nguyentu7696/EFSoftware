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
    public class TMSEmployeeLogTimeService : ITMSEmployeeLogTimeService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private IDepartmentRepository _departmentRepo;
        private ICompanyBasicInfoRepository _companyRepo;
        private ITMSsiteRepository _siteRepo;
        private ITMSJobSiteRepository _tmsJobSiteRepository;
        private ITMSEmployeeRepository _tmsEmployeeRepository;
        private ITMSEmployeeLogTimeRepository _tmsEmpLogTimeRepository;
        private ICompanyBasicInfoRepository _companyBasicInfoRepository;

        public TMSEmployeeLogTimeService(IUnitOfWork unitOfWork, IMapper mapper, ICompanyBasicInfoRepository companyRepo, IDepartmentRepository departmentRepo, ITMSsiteRepository siteRepo,
            ITMSEmployeeRepository tmsEmployeeRepository, ITMSJobSiteRepository tmsJobSiteRepository, ITMSEmployeeLogTimeRepository tmsEmpLogTimeRepository, ICompanyBasicInfoRepository companyBasicInfoRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _companyRepo = companyRepo;
            _departmentRepo = departmentRepo;
            _siteRepo = siteRepo;
            _tmsJobSiteRepository = tmsJobSiteRepository;
            _tmsEmployeeRepository = tmsEmployeeRepository;
            _tmsEmpLogTimeRepository = tmsEmpLogTimeRepository;
            _companyBasicInfoRepository = companyBasicInfoRepository;
        }

        #endregion CTO

        #region GET

        public List<TMSEmployeeLogTimeListViewModel> GetAllEmployeeLogTime(DateTime dateLogTime, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            var department = _departmentRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobSite = _tmsJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var companyList = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            var employee = _tmsEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var empLogTime = _tmsEmpLogTimeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            if (!string.IsNullOrEmpty(filterByName))
            {
                employee = employee.Where(x => x.Name.Contains(filterByName) || x.Empkey.Contains(filterByName)).ToList();
            }

            if (companyid != 0)
            {
                companyList = companyList.Where(x => x.Id == companyid).ToList();
            }

            if (departmentid != 0)
            {
                department = department.Where(x => x.Id == departmentid).ToList();
            }
            if (siteid != 0)
            {
                site = site.Where(x => x.Id == siteid).ToList();
            }
            if (jobsiteid != 0)
            {
                jobSite = jobSite.Where(x => x.Id == jobsiteid).ToList();
            }



            if (dateLogTime != null)
            {
                empLogTime = empLogTime.Where(x => x.DateLog.ToString("dd/MM/yyyy") == dateLogTime.ToString("dd/MM/yyyy"))
                                        .GroupBy(x => x.EmployeeId)
                                        .Select(x => x.Last())
                                        .Where(x => x.AttType != AttType.Absent)
                                        .ToList();
            }

            try
            {
                var result = (from emplt in empLogTime
                              join emp in employee on emplt.EmployeeId equals emp.Id
                              join js in jobSite on emp.JobSiteId equals js.Id
                              join s in site on js.SiteId equals s.Id
                              join d in department on s.DepartmentId equals d.Id
                              join c in companyList on d.CompanyId equals c.Id
                              select new TMSEmployeeLogTimeListViewModel
                              (emplt,
                                  js.Name,
                                  s.Name,
                                  d.Name,
                                  emp)).ToList();
                return result;
            }
            catch
            {
                return null;
            }
        }

        public List<TMSEmployeeLogtimeModel> GetAllEmployeeWithMonth(DateTime date, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            var department = _departmentRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobSite = _tmsJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var companyList = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            var employee = _tmsEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var empLogTime = _tmsEmpLogTimeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
                    

            if (!string.IsNullOrEmpty(filterByName))
            {
                employee = employee.Where(x => x.Name.Contains(filterByName) || x.Empkey.Contains(filterByName)).ToList();
            }

            if (companyid != 0)
            {
                companyList = companyList.Where(x => x.Id == companyid).ToList();
            }

            if (departmentid != 0)
            {
                department = department.Where(x => x.Id == departmentid).ToList();
            }
            if (siteid != 0)
            {
                site = site.Where(x => x.Id == siteid).ToList();
            }
            if (jobsiteid != 0)
            {
                jobSite = jobSite.Where(x => x.Id == jobsiteid).ToList();
            }
      
            if (date != null)
            {
                empLogTime = empLogTime.Where(x => x.DateLog.ToString("MM/yyyy") == date.ToString("MM/yyyy"))
                    .ToList();
            }

            List<DateTime> liDateOfMonth = Enumerable.Range(1, DateTime.DaysInMonth(date.Year, date.Month))  // Days: 1, 2 ... 31 etc.
                    .Select(day => new DateTime(date.Year, date.Month, day)) // Map each day to a date
                    .ToList(); // Load dates into a list
            List<TMSEmployeeLogtimeModel> liResult = new List<TMSEmployeeLogtimeModel>();
            foreach (var dateitem in liDateOfMonth)
            {
               var dayEmpLogTime = empLogTime.Where(x => x.DateLog.ToString("dd/MM/yyyy") == dateitem.ToString("dd/MM/yyyy"))
                                       .GroupBy(x => x.EmployeeId)
                                       .Select(x => x.Last())
                                       .Where(x => x.AttType != AttType.Absent)
                                       .ToList();
                var result = (from emplt in dayEmpLogTime
                              join emp in employee on emplt.EmployeeId equals emp.Id
                              join js in jobSite on emp.JobSiteId equals js.Id
                              join s in site on js.SiteId equals s.Id
                              join d in department on s.DepartmentId equals d.Id
                              join c in companyList on d.CompanyId equals c.Id
                              select new TMSEmployeeLogTimeListViewModel
                              (emplt,
                                  js.Name,
                                  s.Name,
                                  d.Name,
                                  emp)).ToList();

                liResult.Add(new TMSEmployeeLogtimeModel(result.Count(), dateitem));
            }
            return liResult;
            //try
            //{
            //    int count = 0;
            //    var result = (from emplt in empLogTime
            //                  join emp in employee on emplt.EmployeeId equals emp.Id
            //                  join js in jobSite on emp.JobSiteId equals js.Id
            //                  join s in site on js.SiteId equals s.Id
            //                  join d in department on s.DepartmentId equals d.Id
            //                  join c in companyList on d.CompanyId equals c.Id
            //                  select new TMSEmployeeLogTimeListViewModel
            //                  (emplt,
            //                      js.Name,
            //                      s.Name,
            //                      d.Name,
            //                      emp)).ToList();
            //    var data = result.GroupBy(p => p.DateLog)
            //    .Select(g => new TMSEmployeeLogtimeModel(g.Count(), g.LastOrDefault().DateLog)).ToList();
            //    return data;
            //}
            //catch
            //{
            //    return null;
            //}
        }

        public List<TMSEmployeeLogTimeListViewModel> GetAllEmployeeAbsent(DateTime dateLogTime, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            var department = _departmentRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobSite = _tmsJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var companyList = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            var employee = _tmsEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var empLogTime = _tmsEmpLogTimeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            if (!string.IsNullOrEmpty(filterByName))
            {
                employee = employee.Where(x => x.Name.Contains(filterByName) || x.Empkey.Contains(filterByName)).ToList();
            }

            if (companyid != 0)
            {
                companyList = companyList.Where(x => x.Id == companyid).ToList();
            }

            if (departmentid != 0)
            {
                department = department.Where(x => x.Id == departmentid).ToList();
            }

            if (siteid != 0)
            {
                site = site.Where(x => x.Id == siteid).ToList();
            }

            if (jobsiteid != 0)
            {
                jobSite = jobSite.Where(x => x.Id == jobsiteid).ToList();
            }

            if (dateLogTime != null)
            {
                empLogTime = empLogTime.Where(x => x.DateLog.ToString("dd/MM/yyyy") == dateLogTime.ToString("dd/MM/yyyy"))
                                        .GroupBy(x => x.EmployeeId)
                                        .Select(x => x.Last())
                                        .Where(x => x.AttType != AttType.Absent)
                                        .ToList();
            }

            try
            {
                var result = (from emp in employee
                              join js in jobSite on emp.JobSiteId equals js.Id
                              join s in site on js.SiteId equals s.Id
                              join d in department on s.DepartmentId equals d.Id
                              join c in companyList on d.CompanyId equals c.Id
                              join emplt in empLogTime on emp.Id equals emplt.EmployeeId into tmpEmpLogTime
                              from empLgT in tmpEmpLogTime.DefaultIfEmpty()
                              select new TMSEmployeeLogTimeListViewModel
                              (empLgT,
                                  js.Name,
                                  s.Name,
                                  d.Name,
                                  emp)).Where(x => x.Id == 0).ToList();
                return result;
            }
            catch
            {
                return null;
            }
        }


        public PagedResult<TMSEmployeeLogTimeListViewModel> GetAllPagingEmployeeLogTime(int page, int pageSize, DateTime dateLogTime, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            //var data = GetAllEmployeeLogTime(dateLogTime, companyid, departmentid, siteid, jobsiteid);
            //int totalRow = data.Count();

            var department = _departmentRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobSite = _tmsJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var companyList = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            var employee = _tmsEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var empLogTime = _tmsEmpLogTimeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            if (!string.IsNullOrEmpty(filterByName))
            {
                employee = employee.Where(x => x.Name.Contains(filterByName) || x.Empkey.Contains(filterByName)).ToList();
            }

            if (companyid != 0)
            {
                companyList = companyList.Where(x => x.Id == companyid).ToList();
            }

            if (departmentid != 0)
            {
                department = department.Where(x => x.Id == departmentid).ToList();
            }
            if (siteid != 0)
            {
                site = site.Where(x => x.Id == siteid).ToList();
            }
            if (jobsiteid != 0)
            {
                jobSite = jobSite.Where(x => x.Id == jobsiteid).ToList();
            }

            if (dateLogTime != null)
            {
                empLogTime = empLogTime.Where(x => x.DateLog.ToString("dd/MM/yyyy") == dateLogTime.ToString("dd/MM/yyyy"))
                                        .GroupBy(x => x.EmployeeId)
                                        .Select(x => x.Last())
                                        .Where(x => x.AttType != AttType.Absent).ToList();
            }


            var data = (from emplt in empLogTime
                        join emp in employee on emplt.EmployeeId equals emp.Id
                        join js in jobSite on emp.JobSiteId equals js.Id
                        join s in site on js.SiteId equals s.Id
                        join d in department on s.DepartmentId equals d.Id
                        join c in companyList on d.CompanyId equals c.Id
                        select new TMSEmployeeLogTimeListViewModel
                          (emplt,
                              js.Name,
                              s.Name,
                              d.Name,
                              emp));

            var result = data.Skip((page - 1) * pageSize).Take(pageSize).ToList();
            int totalRow = data.ToList().Count();
            var paginationSet = new PagedResult<TMSEmployeeLogTimeListViewModel>()
            {
                Results = result,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public PagedResult<TMSEmployeeLogTimeListViewModel> GetAllPagingEmployeeAbsent(int page, int pageSize, DateTime dateLogTime, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            //var data = GetAllEmployeeLogTime(dateLogTime, companyid, departmentid, siteid, jobsiteid);
            //int totalRow = data.Count();

            var department = _departmentRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobSite = _tmsJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var companyList = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            var employee = _tmsEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var empLogTime = _tmsEmpLogTimeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            if (!string.IsNullOrEmpty(filterByName))
            {
                employee = employee.Where(x => x.Name.Contains(filterByName) || x.Empkey.Contains(filterByName)).ToList();
            }

            if (companyid != 0)
            {
                companyList = companyList.Where(x => x.Id == companyid).ToList();
            }
            if (departmentid != 0)
            {
                department = department.Where(x => x.Id == departmentid).ToList();
            }
            if (siteid != 0)
            {
                site = site.Where(x => x.Id == siteid).ToList();
            }
            if (jobsiteid != 0)
            {
                jobSite = jobSite.Where(x => x.Id == jobsiteid).ToList();
            }

            if (dateLogTime != null)
            {
                empLogTime = empLogTime.Where(x => x.DateLog.ToString("dd/MM/yyyy") == dateLogTime.ToString("dd/MM/yyyy"))
                                        .GroupBy(x => x.EmployeeId)
                                        .Select(x => x.Last())
                                        .Where(x => x.AttType != AttType.Absent)
                                        .ToList();
            }

            var data = (from emp in employee
                        join js in jobSite on emp.JobSiteId equals js.Id
                        join s in site on js.SiteId equals s.Id
                        join d in department on s.DepartmentId equals d.Id
                        join c in companyList on d.CompanyId equals c.Id
                        join emplt in empLogTime on emp.Id equals emplt.EmployeeId into tmpEmpLogTime
                        from empLgT in tmpEmpLogTime.DefaultIfEmpty()
                        select new TMSEmployeeLogTimeListViewModel
            (empLgT,
              js.Name,
              s.Name,
              d.Name,
              emp));
            data = data.Where(x => x.Id == 0);
            var result = data.Skip((page - 1) * pageSize).Take(pageSize).ToList();
            int totalRow = data.ToList().Count();
            var paginationSet = new PagedResult<TMSEmployeeLogTimeListViewModel>()
            {
                Results = result,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        //Modal
        public List<TMSEmployeeModalViewModel> GetAllEmployeeModal(int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            var company = _companyRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobSite = _tmsJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var employee = _tmsEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            if (!string.IsNullOrEmpty(filterByName))
            {
                employee = employee.Where(x => x.Name.Contains(filterByName) || x.Empkey.Contains(filterByName)).ToList();
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
            if (jobsiteid != 0)
            {
                jobSite = jobSite.Where(x => x.Id == jobsiteid).ToList();
            }

            try
            {
                var result = (from emp in employee
                              join js in jobSite on emp.JobSiteId equals js.Id
                              join s in site on js.SiteId equals s.Id
                              join d in department on s.DepartmentId equals d.Id
                              join c in company on d.CompanyId equals c.Id
                              select new TMSEmployeeModalViewModel
                              (emp.Id,
                                  c.Name,
                                  emp.Empkey,
                                  emp.EmpID,
                                  emp.Name,
                                  js)).ToList();
                return result;
            }
            catch
            {
                return null;
            }
        }

        public PagedResult<TMSEmployeeModalViewModel> GetAllPagingEmployeeModal(int page, int pageSize, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            var company = _companyRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepo.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobSite = _tmsJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var employee = _tmsEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            if (!string.IsNullOrEmpty(filterByName))
            {
                employee = employee.Where(x => x.Name.Contains(filterByName) || x.Empkey.Contains(filterByName)).ToList();
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
            if (jobsiteid != 0)
            {
                jobSite = jobSite.Where(x => x.Id == jobsiteid).ToList();
            }

            var data = GetAllEmployeeModal(companyid, departmentid, siteid, jobsiteid);
            var result = (from emp in employee
                          join js in jobSite on emp.JobSiteId equals js.Id
                          join s in site on js.SiteId equals s.Id
                          join d in department on s.DepartmentId equals d.Id
                          join c in company on d.CompanyId equals c.Id
                          select new TMSEmployeeModalViewModel
                          (emp.Id,
                              c.Name,
                              emp.Empkey,
                              emp.EmpID,
                              emp.Name,
                              js)).Skip((page - 1) * pageSize).Take(pageSize).ToList();

            int totalRow = data.Count();
            var paginationSet = new PagedResult<TMSEmployeeModalViewModel>()
            {
                Results = result,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<TMSEmployeeLogTimeViewModel> GetWithEmpIdAndDateLog(int employeeId, DateTime dateLogTime)
        {
            var model = _tmsEmpLogTimeRepository.FindAll(x => x.EmployeeId == employeeId && x.DateLog.Date == dateLogTime.Date).ToList();
            return _mapper.Map<List<TMSEmployeeLogTime>, List<TMSEmployeeLogTimeViewModel>>(model);
        }

        #endregion GET

        #region POST

        public TMSEmployeeLogTime Add(TMSEmployeeLogTimeViewModel Vm)
        {
            var entity = _mapper.Map<TMSEmployeeLogTimeViewModel, TMSEmployeeLogTime>(Vm);
            if(Vm.Id > 0)
            {
                _tmsEmpLogTimeRepository.Update(entity);
            }
            else
            {
                _tmsEmpLogTimeRepository.Add(entity);
            }
            
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region DELETE
        public void Delete(int id)
        {
            _tmsEmpLogTimeRepository.Remove(id);
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
