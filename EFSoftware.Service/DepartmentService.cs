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
    public class DepartmentService : IDepartmentService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private IDepartmentRepository _departmentRepository;
        private ITMSsiteRepository _siteRepository;
        private readonly IMapper _mapper;

        public DepartmentService(IUnitOfWork unitOfWork, IDepartmentRepository departmentRepository, ITMSsiteRepository tmsSiteRepository
            , IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _departmentRepository = departmentRepository;
            _siteRepository = tmsSiteRepository;
            _mapper = mapper;
        }

        #endregion CTO

        #region GET

        public DepartmentViewModel GetById(int id)
        {
            var model = _departmentRepository.Get(id);
            return _mapper.Map<Department, DepartmentViewModel>(model);
        }

        public List<DepartmentViewModel> GetAll()
        {
            var data = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<Department>, List<DepartmentViewModel>>(data);
        }

        public PagedResult<DepartmentViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<Department>, List<DepartmentViewModel>>(query.ToList());

            var paginationSet = new PagedResult<DepartmentViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<DepartmentViewModel> GetAllWithCompany(int companyid, string filterByName = "")
        {
            var data = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Name.Contains(filterByName));
            }
            if (companyid > 0)
            {
                data = data.Where(x => x.CompanyId == companyid).ToList();
            }
            
            
            return _mapper.Map<List<Department>, List<DepartmentViewModel>>(data.ToList());
        }

        public PagedResult<DepartmentViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName = "")
        {
            var query = _departmentRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName));
            }
            if (companyid > 0)
            {
                query = query.Where(x => x.CompanyId == companyid);
            }

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<Department>, List<DepartmentViewModel>>(query.ToList());

            var paginationSet = new PagedResult<DepartmentViewModel>()
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

        public Department Add(DepartmentViewModel Vm)
        {
            var entity = _mapper.Map<DepartmentViewModel, Department>(Vm);
            _departmentRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(DepartmentViewModel Vm)
        {
            var data = _mapper.Map<DepartmentViewModel, Department>(Vm);
            _departmentRepository.Update(data);
            SaveChanges();
        }

        #endregion PUT

        #region DELETE

        public string Delete(int id)
        {
            var listSites = _siteRepository.Find(x => x.DepartmentId == id && x.DeleteFlag != DeleteFlg.Delete);
            if(listSites.Count() > 0)
            {
                return MessageStatic.HaveChild;
            }
            _departmentRepository.Remove(id);
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
