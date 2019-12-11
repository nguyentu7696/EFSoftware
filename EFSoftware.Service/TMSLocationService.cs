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
    public class TMSLocationService : ITMSLocationService
    {
        #region CTO
        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSLocationRepository _itmsLocationRepository;

        public TMSLocationService(IUnitOfWork unitOfWork, IMapper mapper, ITMSLocationRepository itmsLocationRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _itmsLocationRepository = itmsLocationRepository;
        }
        #endregion CTO

        #region GET

        public TMSLocationGetIdViewModel GetById(int id)
        {
            var model = _itmsLocationRepository.Get(id);
            return _mapper.Map<TMSLocation, TMSLocationGetIdViewModel>(model);
        }

        public List<TMSLocationViewModel> GetAll()
        {
            var data = _itmsLocationRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSLocation>, List<TMSLocationViewModel>>(data);
        }

        public PagedResult<TMSLocationViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _itmsLocationRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            int totalRow = query.Count();

            try
            {
                var data = _mapper.Map<List<TMSLocation>, List<TMSLocationViewModel>>(query);

                var paginationSet = new PagedResult<TMSLocationViewModel>()
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

        public List<TMSLocationViewModel> GetAllWithZoneLocation(int zonelocationid, string filterByName = "")
        {
            var data = _itmsLocationRepository.Find(x => x.ZoneLocationId == zonelocationid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Name.Contains(filterByName));
            }
            return _mapper.Map<List<TMSLocation>, List<TMSLocationViewModel>>(data.ToList());
        }

        public PagedResult<TMSLocationViewModel> GetAllPagingWithZoneLocation(int page, int pageSize, int zonelocationid, string filterByName = "")
        {
            var query = _itmsLocationRepository.Find(x => x.ZoneLocationId == zonelocationid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName));
            }
            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSLocation>, List<TMSLocationViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSLocationViewModel>()
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

        public TMSLocation Add(TMSLocationCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSLocationCreateViewModel, TMSLocation>(Vm);
            _itmsLocationRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSLocationViewModel Vm)
        {
            var data = _mapper.Map<TMSLocationViewModel, TMSLocation>(Vm);
            _itmsLocationRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

        #region DELETE

        public void Delete(int id)
        {
            _itmsLocationRepository.Remove(id);
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
