using AutoMapper;
using EFSoftware.Core;
using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Repositories.Interfaces;
using EFSoftware.Repository.Interfaces;
using EFSoftware.Service.Interfaces;
using EFSoftware.Service.Interfaces.ViewModels;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace EFSoftware.Service
{
    public class TMSEmployeeService : ITMSEmployeeService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private ITMSJobSiteRepository _iTMSJobSiteRepository;
        private IDepartmentRepository _departmentRepository;
        private ICompanyBasicInfoRepository _companyBasicInfoRepository;
        private ITMSsiteRepository _siteRepository;
        private ITMSEmployeeRepository _iTMSEmployeeRepository;
        private readonly IMapper _mapper;

        public TMSEmployeeService(IUnitOfWork unitOfWork, ITMSJobSiteRepository iTMSJobSiteRepository, IMapper mapper, 
            IDepartmentRepository departmentRepository, ITMSsiteRepository siteRepository,
            ICompanyBasicInfoRepository companyBasicInfoRepository, ITMSEmployeeRepository iTMSEmployeeRepository)
        {
            _unitOfWork = unitOfWork;
            _iTMSJobSiteRepository = iTMSJobSiteRepository;
            _mapper = mapper;
            _departmentRepository = departmentRepository;
            _companyBasicInfoRepository = companyBasicInfoRepository;
            _siteRepository = siteRepository;
            _iTMSEmployeeRepository = iTMSEmployeeRepository;
        }

        #endregion CTO

        #region GET

        public TMSEmployeeViewModel GetById(int id)
        {
            var model = _iTMSEmployeeRepository.Get(id);
            return _mapper.Map<TMSEmployee, TMSEmployeeViewModel>(model);
        }

        public TMSEmployeeViewModel FindByEmailAsync(string userName)
        {
            var model = _iTMSEmployeeRepository.FindAll(x => x.Email == userName).FirstOrDefault();
            return _mapper.Map<TMSEmployee, TMSEmployeeViewModel>(model);
        }

        


        public List<TMSEmployeeViewModel> GetAll()
        {
            var data = _iTMSEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSEmployee>, List<TMSEmployeeViewModel>>(data);
        }

        public PagedResult<TMSEmployeeListViewModel> GetAllPaging(int page, int pageSize)
        {
            var employee = _iTMSEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobsite = _iTMSJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var company = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            try
            {
                var data = (from e in employee
                            join j in jobsite on e.JobSiteId equals j.Id
                            join s in site on j.SiteId equals s.Id
                            join d in department on s.DepartmentId equals d.Id
                            join c in company on d.CompanyId equals c.Id
                            select new TMSEmployeeListViewModel(e.Id, e.Nric, e.Empkey, e.EmpID, c.Name, e.Name, j.Name, c.Id, d.Id, s.Id, j.Id))
                            .OrderBy(x => x.Id).Skip((page - 1) * pageSize).Take(pageSize).ToList();
                int totalRow = data.Count();

                var paginationSet = new PagedResult<TMSEmployeeListViewModel>()
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

        public List<TMSEmployeeViewModel> GetAllWithJobSite(int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            var data = _iTMSEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Name.Contains(filterByName) || x.Empkey.Contains(filterByName));
            }

            var site = _siteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var jobsite = _iTMSJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var company = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            if (jobsiteid != 0)
            {
                data = data.Where(x => x.JobSiteId == jobsiteid);

            }
            else if (siteid != 0)
            {
                var datasite = (from j in jobsite
                                join s in site on j.SiteId equals s.Id
                                select new
                                {
                                    siteid = j.SiteId,
                                    jobsitedid = j.Id

                                }).Where(x => x.siteid == siteid);
                List<int> liJobSiteId = new List<int>();
                foreach (var item in datasite)
                {
                    liJobSiteId.Add(item.jobsitedid);
                }
                data = data.Where(x => liJobSiteId.Contains(x.JobSiteId));

            }
            else if (departmentid != 0)
            {
                var datasite = (from j in jobsite
                            join s in site on j.SiteId equals s.Id
                            join d in department on s.DepartmentId equals d.Id
                            select new {
                                departmentid = d.Id,
                                jobsitedid = j.Id
                            }).Where(x => x.departmentid == departmentid);

                List<int> liJobSiteId = new List<int>();
                foreach (var item in datasite)
                {
                    liJobSiteId.Add(item.jobsitedid);
                }
                data = data.Where(x => liJobSiteId.Contains(x.JobSiteId));
            }
            else if (companyid != 0)
            {
                var datasite = (from j in jobsite 
                            join s in site on j.SiteId equals s.Id
                            join d in department on s.DepartmentId equals d.Id
                            join c in company on d.CompanyId equals c.Id
                            select new
                            {
                                companyid = c.Id,
                                jobsitedid = j.Id
                            }).Where(x => x.companyid == companyid);
                List<int> liJobSiteId = new List<int>();
                foreach (var item in datasite)
                {
                    liJobSiteId.Add(item.jobsitedid);
                }
                data = data.Where(x => liJobSiteId.Contains(x.JobSiteId));
            }
            return _mapper.Map<List<TMSEmployee>, List<TMSEmployeeViewModel>>(data.ToList());
        }

        public PagedResult<TMSEmployeeListViewModel> GetAllPagingWithJobSite(int page, int pageSize, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            var query = _iTMSEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName) || x.Empkey.Contains(filterByName));
                
            }

            //if (companyid != 0)
            //{
            //    query = query.Where(x => x.CompanyId == companyid);
            //}
            //if (departmentid != 0)
            //{
            //    query = query.Where(x => x.DepartmentId == departmentid);
            //}
            //if (siteid != 0)
            //{
            //    query = query.Where(x => x.SiteId == siteid);
            //}
            //if (jobsiteid != 0)
            //{
            //    query = query.Where(x => x.JobsiteId == jobsiteid);
            //}


            var jobsite = _iTMSJobSiteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var department = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var site = _siteRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            var company = _companyBasicInfoRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            if (jobsiteid != 0)
            {
                query = query.Where(x => x.JobSiteId == jobsiteid);

            }
            else if (siteid != 0)
            {
                var datasite = (from j in jobsite
                                join s in site on j.SiteId equals s.Id
                                select new
                                {
                                    siteid = j.SiteId,
                                    jobsitedid = j.Id

                                }).Where(x => x.siteid == siteid);
                List<int> liJobSiteId = new List<int>();
                foreach (var item in datasite)
                {
                    liJobSiteId.Add(item.jobsitedid);
                }
                query = query.Where(x => liJobSiteId.Contains(x.JobSiteId));
            }
            else if (departmentid != 0)
            {
                var datasite = (from j in jobsite
                                join s in site on j.SiteId equals s.Id
                                join d in department on s.DepartmentId equals d.Id
                                select new
                                {
                                    departmentid = d.Id,
                                    jobsitedid = j.Id
                                }).Where(x => x.departmentid == departmentid);

                List<int> liJobSiteId = new List<int>();
                foreach (var item in datasite)
                {
                    liJobSiteId.Add(item.jobsitedid);
                }
                query = query.Where(x => liJobSiteId.Contains(x.JobSiteId));
            }
            else if (companyid != 0)
            {
                var datasite = (from j in jobsite
                                join s in site on j.SiteId equals s.Id
                                join d in department on s.DepartmentId equals d.Id
                                join c in company on d.CompanyId equals c.Id
                                select new
                                {
                                    companyid = c.Id,
                                    jobsitedid = j.Id
                                }).Where(x => x.companyid == companyid);
                List<int> liJobSiteId = new List<int>();
                foreach (var item in datasite)
                {
                    liJobSiteId.Add(item.jobsitedid);
                }
                query = query.Where(x => liJobSiteId.Contains(x.JobSiteId));
            }

            var employee = query.ToList();
            try
            {
                var data = (from e in employee
                            join j in jobsite on e.JobSiteId equals j.Id
                            join s in site on j.SiteId equals s.Id
                            join d in department on s.DepartmentId equals d.Id
                            join c in company on d.CompanyId equals c.Id
                            select new TMSEmployeeListViewModel(e.Id, e.Nric, e.Empkey, e.EmpID, c.Name, e.Name, j.Name, c.Id, d.Id, s.Id, j.Id)).OrderBy(x => x.Id).Skip((page - 1) * pageSize).Take(pageSize).ToList();
                int totalRow = data.Count();

                var paginationSet = new PagedResult<TMSEmployeeListViewModel>()
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

        //public List<TMSEmployeeViewModel> GetAllForCompany(int jobsiteid, int companyid)
        //{
        //    var data = _iTMSEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
        //    if (jobsiteid != 0)
        //    {
        //        data = data.Where(x => x.JobsiteId == jobsiteid);
        //    }
        //    if (companyid != 0)
        //    {
        //        data = data.Where(x => x.CompanyId == companyid);
        //    }

        //    return _mapper.Map<List<TMSEmployee>, List<TMSEmployeeViewModel>>(data.ToList());
        //}

        //public PagedResult<TMSEmployeeViewModel> GetAllPagingForCompany(int page, int pageSize, int jobsiteid, int companyid)
        //{
        //    var query = _iTMSEmployeeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

        //    if (jobsiteid != 0)
        //    {
        //        query = query.Where(x => x.JobsiteId == jobsiteid);
        //    }
        //    if (companyid != 0)
        //    {
        //        query = query.Where(x => x.CompanyId == companyid);
        //    }

        //    int totalRow = query.Count();

        //    query = query.OrderBy(x => x.Id)
        //        .Skip((page - 1) * pageSize).Take(pageSize);

        //    var data = _mapper.Map<List<TMSEmployee>, List<TMSEmployeeViewModel>>(query.ToList());

        //    var paginationSet = new PagedResult<TMSEmployeeViewModel>()
        //    {
        //        Results = data,
        //        CurrentPage = page,
        //        RowCount = totalRow,
        //        PageSize = pageSize
        //    };
        //    return paginationSet;
        //}

        #endregion GET
        
        #region POST
         //encode_Password
        public  string EncryptString(string text, string keyString)
        {
            var key = Encoding.UTF8.GetBytes(keyString);

            using (var aesAlg = Aes.Create())
            {
                using (var encryptor = aesAlg.CreateEncryptor(key, aesAlg.IV))
                {
                    using (var msEncrypt = new MemoryStream())
                    {
                        using (var csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                        using (var swEncrypt = new StreamWriter(csEncrypt))
                        {
                            swEncrypt.Write(text);
                        }

                        var iv = aesAlg.IV;

                        var decryptedContent = msEncrypt.ToArray();

                        var result = new byte[iv.Length + decryptedContent.Length];

                        Buffer.BlockCopy(iv, 0, result, 0, iv.Length);
                        Buffer.BlockCopy(decryptedContent, 0, result, iv.Length, decryptedContent.Length);

                        return Convert.ToBase64String(result);
                    }
                }
            }
        }

        
        public TMSEmployee Add(TMSEmployeeCreateViewModel Vm) 
        {

            var key = "E546C8DF278CD5931069B522E695D4F2";
            var encrypted = EncryptString(Vm.Password, key);
            Vm.Password = encrypted;
            var entity = _mapper.Map<TMSEmployeeCreateViewModel, TMSEmployee>(Vm);
            _iTMSEmployeeRepository.Add(entity);
            SaveChanges();
            return entity;
        }
       #endregion POST

        #region PUT

        public void Update(TMSEmployeeViewModel Vm)
        {
           var data = _mapper.Map<TMSEmployeeViewModel, TMSEmployee>(Vm);
            _iTMSEmployeeRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

        #region DELETE

        public void Delete(int id)
        {
            _iTMSEmployeeRepository.Remove(id);
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
