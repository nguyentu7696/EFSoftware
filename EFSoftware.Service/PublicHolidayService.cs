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
    public class PublicHolidayService : IPublicHolidayService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private IPublicHolidayRepository _publicHolidayRepository;
        private readonly IMapper _mapper;

        public PublicHolidayService(IUnitOfWork unitOfWork, IPublicHolidayRepository publicHolidayRepository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _publicHolidayRepository = publicHolidayRepository;
            _mapper = mapper;
        }

        #endregion CTO

        #region GET
        public PublicHolidayViewModel GetById(int id)
        {
            var model = _publicHolidayRepository.Get(id);
            return _mapper.Map<PublicHoliday, PublicHolidayViewModel>(model);
        }

        public List<PublicHolidayViewModel> GetAllWithCountryAndYear(string country, int year, string keySearch)
        {
            var data = _publicHolidayRepository.Find(x => x.Country == country && x.Year == year && x.DeleteFlag != DeleteFlg.Delete);
            if(!string.IsNullOrEmpty(keySearch))
            {
                data = data.Where(x => x.Event.Contains(keySearch));
            }
            return _mapper.Map<List<PublicHoliday>, List<PublicHolidayViewModel>>(data.ToList());
        }

        public PagedResult<PublicHolidayViewModel> GetAllPagingWithCountryAndYear(int page, int pageSize, string country, int year, string keySearch = "", int orderByEvent = 0, int orderByFrom = 0, int orderByTo = 0)
        {
            var query = _publicHolidayRepository.Find(x => x.Country == country && x.Year == year && x.DeleteFlag != DeleteFlg.Delete);
            if(!string.IsNullOrEmpty(keySearch))
            {
                query = query.Where(x => x.Event.Contains(keySearch));
            }

            int totalRow = query.Count();

            if (orderByEvent == 1)
            {
                query = query.OrderBy(x => x.Event);
            }
            else if (orderByEvent == -1)
            {
                query = query.OrderByDescending(x => x.Event);

            }
            else if (orderByFrom == 1)
            {
                query = query.OrderBy(x => x.PeriodStartDate);
            }
            else if (orderByFrom == -1)
            {
                query = query.OrderByDescending(x => x.PeriodStartDate);
            }
            else if (orderByTo == 1)
            {
                query = query.OrderBy(x => x.PeriodEndDate);
            }
            else if (orderByTo == -1)
            {
                query = query.OrderByDescending(x => x.PeriodEndDate);
            }

            query = query.Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<PublicHoliday>, List<PublicHolidayViewModel>>(query.ToList());

            var paginationSet = new PagedResult<PublicHolidayViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public List<PublicHolidayWithEventViewModel> GetAllWithEvent()
        {
            var data = _publicHolidayRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<PublicHoliday>, List<PublicHolidayWithEventViewModel>>(data);
        }

        public List<PublicHolidayViewModel> GetAll()
        {
            var data = _publicHolidayRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<PublicHoliday>, List<PublicHolidayViewModel>>(data);
        }

        public PagedResult<PublicHolidayViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _publicHolidayRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<PublicHoliday>, List<PublicHolidayViewModel>>(query.ToList());

            var paginationSet = new PagedResult<PublicHolidayViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        #endregion GET

        public PublicHoliday Add(PublicHolidayViewModel Vm)
        {
            var entity = _mapper.Map<PublicHolidayViewModel, PublicHoliday>(Vm);
            _publicHolidayRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        public void Update(PublicHolidayViewModel Vm)
        {
            var data = _mapper.Map<PublicHolidayViewModel, PublicHoliday>(Vm);
            _publicHolidayRepository.Update(data);
            SaveChanges();
        }

        public void Delete(int id)
        {
            _publicHolidayRepository.Remove(id);
            SaveChanges();
        }

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
