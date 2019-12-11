using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Service.Interfaces;
using EFSoftware.Service.Interfaces.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EFSoftware.Controllers
{
    public class TMSRosterController : BaseController
    {
        #region Constructor

        private ITMSRosterService _tmsRosterService;
        
        public TMSRosterController(ITMSRosterService tmsRosterService)
        {
            _tmsRosterService = tmsRosterService;
        }

        #endregion Constructor

        #region Public Method

        #region GET

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            try
            {
                var data = _tmsRosterService.GetAll();
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetDetailRoster")]
        public IActionResult GetDetailRoster(int employeeId, DateTime date)
        {
            try
            {
                var data = _tmsRosterService.GetDetailRoster(employeeId, date);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetByForMonth")]
        public IActionResult GetByForMonth(DateTime startDate, DateTime endDate, int employeeId, int companyId, int jobsiteId)
        {
            try
            {
                var data = _tmsRosterService.GetByForMonth(startDate, endDate, employeeId, companyId, jobsiteId);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        #endregion GET

        #region PUT

        [HttpPut]
        [Route("Update")]
        public IActionResult Update([FromBody]TMSRosterViewModel Vm)
        {
            if (!ModelState.IsValid)
            {
                var allErrors = ModelState.Values.SelectMany(v => v.Errors);
                return new BadRequestObjectResult(new GenericResult(false, allErrors));
            }
            else
            {
                try
                {
                    var date = _tmsRosterService.Update(Vm);

                    return new OkObjectResult(new GenericResult(true, date));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }

        [HttpPut]
        [Route("SaveForMonth")]
        public IActionResult SaveForMonth([FromBody]List<TMSRosterViewModel> LstRosterChanged)
        {
            if (!ModelState.IsValid)
            {
                var allErrors = ModelState.Values.SelectMany(v => v.Errors);
                return new BadRequestObjectResult(new GenericResult(false, allErrors));
            }
            else
            {
                try
                {
                    _tmsRosterService.SaveForMonth(LstRosterChanged);

                    return new OkObjectResult(new GenericResult(true, "Save Success"));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }

        [HttpPut]
        [Route("SaveDuplicate")]
        public IActionResult SaveDuplicate([FromBody]DuplicateModel Vm)
        {
            if (!ModelState.IsValid)
            {
                var allErrors = ModelState.Values.SelectMany(v => v.Errors);
                return new BadRequestObjectResult(new GenericResult(false, allErrors));
            }
            else
            {
                try
                {
                    _tmsRosterService.SaveDuplicate(Vm);

                    return new OkObjectResult(new GenericResult(true, "Save Success"));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }
        #endregion PUT

        #endregion Public Method
    }
}