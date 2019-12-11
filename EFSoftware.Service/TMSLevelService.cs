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
    public class TMSLevelService : ITMSLevelService
    {
        #region CTO
        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSLevelRepository _itmsLevelRepository;

        public TMSLevelService(IUnitOfWork unitOfWork, IMapper mapper, ITMSLevelRepository itmsLevelRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _itmsLevelRepository = itmsLevelRepository;
        }
        #endregion CTO

        #region GET

        public TMSLevelViewModel GetById(int id)
        {
            var model = _itmsLevelRepository.Get(id);
            return _mapper.Map<TMSLevel, TMSLevelViewModel>(model);
        }

        public List<TMSLevelViewModel> GetAll()
        {
            var data = _itmsLevelRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSLevel>, List<TMSLevelViewModel>>(data);
        }

        public PagedResult<TMSLevelViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _itmsLevelRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            int totalRow = query.Count();

            try
            {
                var data = _mapper.Map<List<TMSLevel>, List<TMSLevelViewModel>>(query);

                var paginationSet = new PagedResult<TMSLevelViewModel>()
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

        public List<TMSLevelViewModel> GetAllWithZoneLocation(int zonelocationid, string filterByName = "")
        {
            var data = _itmsLevelRepository.Find(x => x.ZoneLocationId == zonelocationid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Name.Contains(filterByName) || x.Value.Contains(filterByName));
            }
            if (zonelocationid > 0)
            {
                data = data.Where(x => x.ZoneLocationId == zonelocationid);
            }
            return _mapper.Map<List<TMSLevel>, List<TMSLevelViewModel>>(data.ToList());
        }

        public PagedResult<TMSLevelViewModel> GetAllPagingWithZoneLocation(int page, int pageSize, int zonelocationid, string filterByName="")
        {
            var query = _itmsLevelRepository.Find(x => x.ZoneLocationId == zonelocationid && x.DeleteFlag != DeleteFlg.Delete);
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

            var data = _mapper.Map<List<TMSLevel>, List<TMSLevelViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSLevelViewModel>()
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

        public TMSLevel Add(TMSLevelCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSLevelCreateViewModel, TMSLevel>(Vm);
            _itmsLevelRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSLevelViewModel Vm)
        {
            var data = _mapper.Map<TMSLevelViewModel, TMSLevel>(Vm);
            _itmsLevelRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

        #region DELETE

        public void Delete(int id)
        {
            _itmsLevelRepository.Remove(id);
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
