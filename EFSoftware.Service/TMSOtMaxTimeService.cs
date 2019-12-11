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
    public class TMSOtMaxTimeService : ITMSOtMaxTimeService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSOtMaxTimeRepository _tMSOtMaxTimeRepository;
        public TMSOtMaxTimeService(IUnitOfWork unitOfWork, IMapper mapper, ITMSOtMaxTimeRepository tMSOtMaxTimeRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _tMSOtMaxTimeRepository = tMSOtMaxTimeRepository;
        }
        #endregion CTO

        #region GET

        public TMSOtMaxTimeViewModel GetById(int id)
        {
            var model = _tMSOtMaxTimeRepository.Get(id);
            return _mapper.Map<TMSOtMaxTime, TMSOtMaxTimeViewModel>(model);
        }

        public List<TMSOtMaxTimeViewModel> GetAll()
        {
            var data = _tMSOtMaxTimeRepository.Find(x => x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSOtMaxTime>, List<TMSOtMaxTimeViewModel>>(data);
        }

        public TMSOtMaxTimeViewModel GetWithJobSite(int jobsiteid)
        {
            var data = _tMSOtMaxTimeRepository.Find(x => x.JobSiteId == jobsiteid && x.DeleteFlag != DeleteFlg.Delete).OrderByDescending(x => x.Id).FirstOrDefault();
            return _mapper.Map<TMSOtMaxTime, TMSOtMaxTimeViewModel>(data);
        }
        #endregion GET

        #region POST

        public TMSOtMaxTime Add(TMSOtMaxTimeCreateViewModel Vm)
        {
            var entity = _mapper.Map<TMSOtMaxTimeCreateViewModel, TMSOtMaxTime>(Vm);
            _tMSOtMaxTimeRepository.Add(entity);
            SaveChanges();
            return entity;
        }

        #endregion POST

        #region PUT

        public void Update(TMSOtMaxTimeViewModel Vm)
        {
            var data = _mapper.Map<TMSOtMaxTimeViewModel, TMSOtMaxTime>(Vm);
            _tMSOtMaxTimeRepository.Update(data);
            SaveChanges();
        }
        #endregion PUT

        #region DELETE
        public void Delete(int id)
        {
            _tMSOtMaxTimeRepository.Remove(id);
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
