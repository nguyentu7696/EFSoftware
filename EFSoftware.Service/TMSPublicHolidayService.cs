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
    public class TMSPublicHolidayService : ITMSPublicHolidayService
    {
        #region CTO
        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSPublicHolidayRepository _iTMSPublicHolidayRepository;
        private IPublicHolidayRepository _publicHolidayRepository;
        public TMSPublicHolidayService(IUnitOfWork unitOfWork, IMapper mapper, ITMSPublicHolidayRepository tMSPublicHolidayRepository, IPublicHolidayRepository publicHolidayRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _iTMSPublicHolidayRepository = tMSPublicHolidayRepository;
            _publicHolidayRepository = publicHolidayRepository;
        }
        #endregion CTO

        #region GET

        public TMSPublicHolidayViewModel GetById(int id)
        {
            var model = _iTMSPublicHolidayRepository.Get(id);
            return _mapper.Map<TMSPublicHoliday, TMSPublicHolidayViewModel>(model);
        }

        public List<TMSPublicHolidayViewModel> GetAll(string country, int year, string filterByName = "")
        {
            var data = _iTMSPublicHolidayRepository.Find(x => x.Country == country && x.Year == year && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Event.Contains(filterByName));
            }
            return _mapper.Map<List<TMSPublicHoliday>, List<TMSPublicHolidayViewModel>>(data.ToList());
        }

        public List<TMSPublicHolidayViewModel> GetAllWithCompany(string country, int year, int compnayid, string filterByName = "")
        {
            var data = _iTMSPublicHolidayRepository.Find(x => x.CompanyId == compnayid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.Event.Contains(filterByName));
            }
            if (year != 0)
            {
                data = data.Where(x => x.Year == year);
            }
            if(!string.IsNullOrEmpty(country))
            {
                data = data.Where(x => x.Country == country);
            }
            return _mapper.Map<List<TMSPublicHoliday>, List<TMSPublicHolidayViewModel>>(data.ToList());
        }

        public PagedResult<TMSPublicHolidayViewModel> GetAllPaging(int page, int pageSize, string country, int year)
        {
            var query = _iTMSPublicHolidayRepository.Find(x => x.Country == country && x.Year == year && x.DeleteFlag != DeleteFlg.Delete);

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSPublicHoliday>, List<TMSPublicHolidayViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSPublicHolidayViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public PagedResult<TMSPublicHolidayViewModel> GetAllPagingWithCompany(int page, int pageSize, string country, int year, int companyid, string filterByName = "")
        {
            var query = _iTMSPublicHolidayRepository.Find(x => x.Country == country && x.Year == year && x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.Event.Contains(filterByName));
            }
            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSPublicHoliday>, List<TMSPublicHolidayViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSPublicHolidayViewModel>()
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

        public TMSPublicHoliday Add(TMSPublicHolidayCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSPublicHolidayCreateViewModel, TMSPublicHoliday>(Vm);
            _iTMSPublicHolidayRepository.Add(entity);

            var publicHolidayGlobal = _publicHolidayRepository.Get(Vm.PublicHolidayId);
            if(publicHolidayGlobal != null)
            {
                if (string.IsNullOrEmpty(publicHolidayGlobal.CompanyUsed))
                {
                    publicHolidayGlobal.CompanyUsed = "";
                }
                List<string> listCompanyUsed = publicHolidayGlobal.CompanyUsed.Split(';').ToList();
                if (!listCompanyUsed.Contains(Vm.CompanyId.ToString()))
                {
                    listCompanyUsed.Add(Vm.CompanyId.ToString());
                }
                publicHolidayGlobal.CompanyUsed = string.Join(";", listCompanyUsed.ToArray());
                _publicHolidayRepository.Update(publicHolidayGlobal);
            }
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSPublicHolidayViewModel Vm)
        {
            var data = _mapper.Map<TMSPublicHolidayViewModel, TMSPublicHoliday>(Vm);
            _iTMSPublicHolidayRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

        #region DELETE
        public void Delete(int id)
        {
            var itempublicholiday= _iTMSPublicHolidayRepository.Get(id);
            if (itempublicholiday.PublicHolidayId > 0)
            {
                var publicHolidayGlobal = _publicHolidayRepository.Get(itempublicholiday.PublicHolidayId);
                if (publicHolidayGlobal != null)
                {
                    if (string.IsNullOrEmpty(publicHolidayGlobal.CompanyUsed))
                    {
                        publicHolidayGlobal.CompanyUsed = "";
                    }
                    List<string> listCompanyUsed = publicHolidayGlobal.CompanyUsed.Split(';').ToList();
                    if (listCompanyUsed.Contains(itempublicholiday.CompanyId.ToString()))
                    {
                        listCompanyUsed.Remove(itempublicholiday.CompanyId.ToString());
                    }
                    publicHolidayGlobal.CompanyUsed = string.Join(";", listCompanyUsed.ToArray());
                    _publicHolidayRepository.Update(publicHolidayGlobal);
                }
            }
            _iTMSPublicHolidayRepository.Remove(id);
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
