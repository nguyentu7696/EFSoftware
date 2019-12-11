using AutoMapper;
using EFSoftware.Core;
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
    public class TMSEventTRService : ITMSEventTRService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private ITMSEventTRRepository _tMSEventTRRepository;
        public TMSEventTRService(IUnitOfWork unitOfWork, IMapper mapper, ITMSEventTRRepository tMSEventTRRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _tMSEventTRRepository = tMSEventTRRepository;
        }
        #endregion CTO

        #region GET
        public List<TMSEventTerminationResignViewModel> GetByEmployeeId(int employeeId)
        {
            var model = _tMSEventTRRepository.Find(x => x.EmployeeId == employeeId && x.DeleteFlag != DeleteFlg.Delete).ToList();
            return _mapper.Map<List<TMSEventTerminationResign>, List<TMSEventTerminationResignViewModel>>(model);
        }

        #endregion GET

        #region POST

        public TMSEventTerminationResign Add(TMSEventCreateTRViewModel Vm)
        {
            var entity = _mapper.Map<TMSEventCreateTRViewModel, TMSEventTerminationResign>(Vm);
            _tMSEventTRRepository.Add(entity);
            SaveChanges();
            return entity;
        }
        #endregion POST

        #region PUT
        public void Update(TMSEventTerminationResignViewModel Vm)
        {
            var data = _mapper.Map<TMSEventTerminationResignViewModel, TMSEventTerminationResign>(Vm);
            if (Vm.Id >= 1)
            {
                _tMSEventTRRepository.Update(data);
            }
            else
            {
                _tMSEventTRRepository.Add(data);
            }
            
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
