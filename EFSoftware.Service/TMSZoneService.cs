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
    public class TMSZoneService : ITMSZoneService
    {
        #region CTO
        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSZoneRepository _itmsZoneRepository;
        private ITMSZoneLocationRepository _itmsZoneLocationRepository;

        public TMSZoneService(IUnitOfWork unitOfWork, IMapper mapper, ITMSZoneRepository itmsZoneRepository, ITMSZoneLocationRepository itmsZoneLocationRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _itmsZoneRepository = itmsZoneRepository;
            _itmsZoneLocationRepository = itmsZoneLocationRepository;
        }
        #endregion CTO

        #region GET

        public TMSZoneViewModel GetById(int id)
        {
            var model = _itmsZoneRepository.Get(id);
            return _mapper.Map<TMSZone, TMSZoneViewModel>(model);
        }

        public List<TMSZoneViewModel> GetAll()
        {
            var data = _itmsZoneRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSZone>, List<TMSZoneViewModel>>(data);
        }

        public PagedResult<TMSZoneViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _itmsZoneRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            int totalRow = query.Count();

            try
            {
                var data = _mapper.Map<List<TMSZone>, List<TMSZoneViewModel>>(query);

                var paginationSet = new PagedResult<TMSZoneViewModel>()
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

        public List<TMSZoneViewModel> GetAllWithZoneLocation(int zonelocationid, string filterByName)
        {
            var data = _itmsZoneRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Name.Contains(filterByName));
            }
            if (zonelocationid > 0)
            {
                data = data.Where(x => x.ZoneLocationId == zonelocationid);
            }            
            return _mapper.Map<List<TMSZone>, List<TMSZoneViewModel>>(data.ToList());
        }

        public PagedResult<TMSZoneListViewModel> GetAllPagingWithZoneLocation(int page, int pageSize, int zonelocationid, string filterByName)
        {
            var query = _itmsZoneRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Name.Contains(filterByName));
            }
            if (zonelocationid > 0)
            {
                query = query.Where(x => x.ZoneLocationId == zonelocationid);
            }

            var zone = query.ToList();
            var zoneLocation = _itmsZoneLocationRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();

            try
            {
                var data = (from z in zone
                            join zlc in zoneLocation on z.ZoneLocationId equals zlc.Id
                            select new TMSZoneListViewModel(z.Id, z.Name, z.Status, z.ZoneLocationId, zlc.Name )).OrderBy(x => x.Id).Skip((page - 1) * pageSize).Take(pageSize).ToList();
                int totalRow = data.Count();

                var paginationSet = new PagedResult<TMSZoneListViewModel>()
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

        public TMSZone Add(TMSZoneCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSZoneCreateViewModel, TMSZone>(Vm);
            _itmsZoneRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSZoneViewModel Vm)
        {
            var data = _mapper.Map<TMSZoneViewModel, TMSZone>(Vm);
            _itmsZoneRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

        #region DELETE

        public void Delete(int id)
        {
            _itmsZoneRepository.Remove(id);
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
