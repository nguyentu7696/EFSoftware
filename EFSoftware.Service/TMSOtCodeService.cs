using AutoMapper;
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
    public class TMSOtCodeService : ITMSOtCodeService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSOtCodeRepository _tMSOtCodeRepository;
        private ITMSOtSettingRepository _tMSOtSettingRepository;
        public TMSOtCodeService(IUnitOfWork unitOfWork, IMapper mapper, ITMSOtCodeRepository tMSOtCodeRepository, ITMSOtSettingRepository tMSOtSettingRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _tMSOtCodeRepository = tMSOtCodeRepository;
            _tMSOtSettingRepository = tMSOtSettingRepository;
        }
        #endregion CTO

        #region GET

        public TMSOtCodeGetIdViewModel GetById(int id)
        {
            var model = _tMSOtCodeRepository.Get(id);
            return _mapper.Map<TMSOtCode, TMSOtCodeGetIdViewModel>(model);
        }

        public List<TMSOtCodeViewModel> GetAll()
        {
            var data = _tMSOtCodeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSOtCode>, List<TMSOtCodeViewModel>>(data);
        }

        public List<TMSOtCodeGetIdViewModel> GetAllWithCompany(int compnayid, string filterByName)
        {
            var data = _tMSOtCodeRepository.Find(x => x.CompanyId == compnayid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                data = data.Where(x => x.PayrollCode.Contains(filterByName) || x.Payroll.Contains(filterByName));
            }
            return _mapper.Map<List<TMSOtCode>, List<TMSOtCodeGetIdViewModel>>(data.ToList());
        }

        public PagedResult<TMSOtCodeViewModel> GetAllPaging(int page, int pageSize)
        {
            var query = _tMSOtCodeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete);
           
            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSOtCode>, List<TMSOtCodeViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSOtCodeViewModel>()
            {
                Results = data,
                CurrentPage = page,
                RowCount = totalRow,
                PageSize = pageSize
            };
            return paginationSet;
        }

        public PagedResult<TMSOtCodeViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName = "")
        {
            var query = _tMSOtCodeRepository.Find(x => x.CompanyId == companyid && x.DeleteFlag != DeleteFlg.Delete);
            if (!string.IsNullOrEmpty(filterByName))
            {
                query = query.Where(x => x.PayrollCode.Contains(filterByName) || x.Payroll.Contains(filterByName));
            }

            int totalRow = query.Count();

            query = query.OrderBy(x => x.Id)
                .Skip((page - 1) * pageSize).Take(pageSize);

            var data = _mapper.Map<List<TMSOtCode>, List<TMSOtCodeViewModel>>(query.ToList());

            var paginationSet = new PagedResult<TMSOtCodeViewModel>()
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

        public TMSOtCode Add(TMSOtCodeCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSOtCodeCreateViewModel, TMSOtCode>(Vm);
            _tMSOtCodeRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSOtCodeViewModel Vm)
        {
            var data = _mapper.Map<TMSOtCodeViewModel, TMSOtCode>(Vm);
            _tMSOtCodeRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

        #region DELETE
        public string Delete(int id)
        {
            var listOtSetting = _tMSOtSettingRepository.Find(x => x.OtcodeId == id);
            if (listOtSetting.Count() > 0)
            {
                return MessageStatic.HaveChild;
            }
            _tMSOtCodeRepository.Remove(id);
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
