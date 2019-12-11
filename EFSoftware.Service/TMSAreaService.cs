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
    public class TMSAreaService : ITMSAreaService
    {
        #region CTO
        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSAreaRepository _itmsAreaRepository;

        public TMSAreaService(IUnitOfWork unitOfWork, IMapper mapper, ITMSAreaRepository itmsAreaRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _itmsAreaRepository = itmsAreaRepository;
        }
        #endregion CTO

        #region GET

        public TMSAreaViewModel GetById(int id)
        {
            var model = _itmsAreaRepository.Get(id);
            return _mapper.Map<TMSArea, TMSAreaViewModel>(model);
        }

        public List<TMSAreaViewModel> GetAll()
        {
            var data = _itmsAreaRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSArea>, List<TMSAreaViewModel>>(data);
        }

        public PagedResult<TMSAreaViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _itmsAreaRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            int totalRow = query.Count();

            try
            {
                var data = _mapper.Map<List<TMSArea>, List<TMSAreaViewModel>>(query);

                var paginationSet = new PagedResult<TMSAreaViewModel>()
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

        public List<TMSAreaViewModel> GetAllWithZoneLocation(int zonelocationid , string filterByName = "")
        {
            var data = _itmsAreaRepository.Find(x => x.ZoneLocationId == zonelocationid && x.DeleteFlag != DeleteFlg.Delete);
         
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Name.Contains(filterByName) || x.Value.Contains(filterByName));
            }
            if (zonelocationid > 0)
            {
                data = data.Where(x => x.ZoneLocationId == zonelocationid);
            }
            return _mapper.Map<List<TMSArea>, List<TMSAreaViewModel>>(data.ToList());
        }

        public PagedResult<TMSAreaViewModel> GetAllPagingWithZoneLocation(int page, int pageSize, int zonelocationid , string filterByName = "")
        {
            var query = _itmsAreaRepository.Find(x => x.ZoneLocationId == zonelocationid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName) || x.Value.Contains(filterByName));
            }
            if (zonelocationid > 0)
            {
                query = query.Where(x => x.ZoneLocationId == zonelocationid);
            }

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSArea>, List<TMSAreaViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSAreaViewModel>()
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

        public TMSArea Add(TMSAreaCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSAreaCreateViewModel, TMSArea>(Vm);
            _itmsAreaRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSAreaViewModel Vm)
        {
            var data = _mapper.Map<TMSAreaViewModel, TMSArea>(Vm);
            _itmsAreaRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

        #region DELETE

        public void Delete(int id)
        {
            _itmsAreaRepository.Remove(id);
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
