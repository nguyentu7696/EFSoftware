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
    public class TMSRaceService : ITMSRaceService
    {
        #region CTO
        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSRaceRepository _itmsRaceRepository;

        public TMSRaceService(IUnitOfWork unitOfWork, IMapper mapper, ITMSRaceRepository itmsRaceRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _itmsRaceRepository = itmsRaceRepository;
        }
        #endregion CTO

        #region GET

        public TMSRaceViewModel GetById(int id)
        {
            var model = _itmsRaceRepository.Get(id);
            return _mapper.Map<TMSRace, TMSRaceViewModel>(model);
        }

        public List<TMSRaceViewModel> GetAll()
        {
            var data = _itmsRaceRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSRace>, List<TMSRaceViewModel>>(data);
        }

        public PagedResult<TMSRaceViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _itmsRaceRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            int totalRow = query.Count();

            try
            {
                var data = _mapper.Map<List<TMSRace>, List<TMSRaceViewModel>>(query);

                var paginationSet = new PagedResult<TMSRaceViewModel>()
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

        public List<TMSRaceViewModel> GetAllWithCompany(int companyid, string filterByName = "")
        {
            var data = _itmsRaceRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
              data = data.Where(x => x.Name.Contains(filterByName) || x.Value.Contains(filterByName));
            }
            return _mapper.Map<List<TMSRace>, List<TMSRaceViewModel>>(data.ToList());
        }

        public PagedResult<TMSRaceViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName = "")
        {
            var query = _itmsRaceRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName) || x.Value.Contains(filterByName));
            }
            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSRace>, List<TMSRaceViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSRaceViewModel>()
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

        public TMSRace Add(TMSRaceCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSRaceCreateViewModel, TMSRace>(Vm);
            _itmsRaceRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSRaceViewModel Vm)
        {
            var data = _mapper.Map<TMSRaceViewModel, TMSRace>(Vm);
            _itmsRaceRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

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
