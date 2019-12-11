using AutoMapper;
using AutoMapper.QueryableExtensions;
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
    public class TMSResignReasonService : ITMSResignReasonService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private ITMSResignReasonRepository _tmsResignReasonRepository;
        private readonly IMapper _mapper;

        public TMSResignReasonService(IUnitOfWork unitOfWork, ITMSResignReasonRepository tmsResignReasionRepository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _tmsResignReasonRepository = tmsResignReasionRepository;
            _mapper = mapper;
        }

        #endregion CTO

        #region GET

        public TMSResignReasonViewModel GetById(int id)
        {
            var model = _tmsResignReasonRepository.Get(id);
            return _mapper.Map<TMSResignReason, TMSResignReasonViewModel>(model);
        }

        public List<TMSResignReasonViewModel> GetAll()
        {
            var data = _tmsResignReasonRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSResignReason>, List<TMSResignReasonViewModel>>(data);
        }

        public PagedResult<TMSResignReasonViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _tmsResignReasonRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSResignReason>, List<TMSResignReasonViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSResignReasonViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<TMSResignReasonViewModel> GetAllWithCompany(int companyid, string filterByName = "")
        {
            var data = _tmsResignReasonRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
              data = data.Where(x => x.Name.Contains(filterByName) || x.Remarks.Contains(filterByName) || x.Code.Contains(filterByName));
            }
            return _mapper.Map<List<TMSResignReason>, List<TMSResignReasonViewModel>>(data.ToList());
        }

        public PagedResult<TMSResignReasonViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName = "")
        {
            var query = _tmsResignReasonRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName) || x.Remarks.Contains(filterByName) || x.Code.Contains(filterByName));
            }
            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSResignReason>, List<TMSResignReasonViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSResignReasonViewModel>()
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

        public TMSResignReason Add(TMSResignReasonViewModel Vm)
        {
            var entity = _mapper.Map<TMSResignReasonViewModel, TMSResignReason>(Vm);
            _tmsResignReasonRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSResignReasonViewModel Vm)
        {
            var data = _mapper.Map<TMSResignReasonViewModel, TMSResignReason>(Vm);
            _tmsResignReasonRepository.Update(data);
            SaveChanges();
        }

        #endregion PUT

        #region DELETE

        public void Delete(int id)
        {
            _tmsResignReasonRepository.Remove(id);
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
