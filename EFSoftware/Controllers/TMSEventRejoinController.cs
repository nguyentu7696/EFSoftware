﻿using System;
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
    
    public class TMSEventRejoinController : BaseController
    {
        #region Constructor

        private ITMSEventRejoinService _tmsEventRejoinService;

        public TMSEventRejoinController(ITMSEventRejoinService tmsEventRejoinService)
        {
            _tmsEventRejoinService = tmsEventRejoinService;
        }

        #endregion Constructor

        #region GET
        [HttpGet]
        [Route("GetByEmployeeId/{employeeId}")]
        public IActionResult GetByEmployeeId(int employeeId)
        {
            if (employeeId == 0)
            {
                return new BadRequestObjectResult(new GenericResult(false, "input is not valid"));
            }
            else
            {
                try
                {
                    var data = _tmsEventRejoinService.GetByEmployeeId(employeeId);
                    return new OkObjectResult(new GenericResult(true, data));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }
        #endregion GET

        #region POST

        [HttpPost]
        [Route("Add")]
        public IActionResult Add([FromBody]TMSEventRejoinCreateViewModel Vm)
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
                    var data = _tmsEventRejoinService.Add(Vm);
                    return new OkObjectResult(new GenericResult(true, data));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }
        #endregion POST

        #region PUT

        [HttpPut]
        [Route("Update")]
        public IActionResult Update([FromBody]TMSEventRejoinViewModel Vm)
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
                    _tmsEventRejoinService.Update(Vm);

                    return new OkObjectResult(new GenericResult(true, "Update Success"));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }
        #endregion PUT
    }
}