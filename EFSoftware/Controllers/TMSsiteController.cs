﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFSoftware.Core.Shared;
using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Service.Interfaces;
using EFSoftware.Service.Interfaces.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EFSoftware.Controllers
{
    public class TMSsiteController : BaseController
    {
        #region Constructor

        private ITMSsiteService _tMSsiteService;

        public TMSsiteController(ITMSsiteService tMSsiteService)
        {
            _tMSsiteService = tMSsiteService;
        }

        #endregion Constructor

        #region GET

        [HttpGet]
        [Route("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            if (id == 0)
            {
                return new BadRequestObjectResult(new GenericResult(false, "input is not valid"));
            }
            else
            {
                try
                {
                    var data = _tMSsiteService.GetById(id);
                    return new OkObjectResult(new GenericResult(true, data));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            try
            {
                var data = _tMSsiteService.GetAll();
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllPaging")]
        public IActionResult GetAllPaging(int page, int pageSize)
        {
            try
            {
                var data = _tMSsiteService.GetAllPaging(page, pageSize);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllForCompany")]
        public IActionResult GetAllForCompany(int departmentid, int companyid, string filterByName = "")
        {
            try
            {
                var data = _tMSsiteService.GetAllForCompany(departmentid, companyid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllPagingForCompany")]
        public IActionResult GetAllPagingForCompany(int page, int pageSize, int departmentid, int companyid, string filterByName = "")
        {
            try
            {
                var data = _tMSsiteService.GetAllPagingForCompany(page, pageSize, departmentid, companyid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetListSite")]
        public IActionResult GetListSite()
        {
            try
            {
                var data = _tMSsiteService.GetListSite();
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetListSitePaging")]
        public IActionResult GetListSitePaging(int page, int pageSize)
        {
            try
            {
                var data = _tMSsiteService.GetListSitePaging(page, pageSize);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        #endregion GET

        #region POST

        [HttpPost]
        [Route("Add")]
        public IActionResult Add([FromBody]TMSsiteViewModel Vm)
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
                    _tMSsiteService.Add(Vm);

                    return new OkObjectResult(new GenericResult(true, "Add success!!!"));
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
        public IActionResult Update([FromBody]TMSsiteViewModel Vm)
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
                    _tMSsiteService.Update(Vm);

                    return new OkObjectResult(new GenericResult(true, "Update Success"));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }
        #endregion PUT

        #region DELETE

        [HttpDelete]
        [Route("Delete")]
        public IActionResult Delete(int id)
        {
            if (id == 0)
            {
                return new BadRequestObjectResult(new GenericResult(false, "Id is Requied"));
            }
            else
            {
                try
                {
                    string result = _tMSsiteService.Delete(id);
                    if (!string.IsNullOrEmpty(result))
                    {
                        return new OkObjectResult(new GenericResult(false, MessageStatic.HaveChild));
                    }
                    return new OkObjectResult(new GenericResult(true, "DeleteSuccess"));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }
        #endregion DELETE
    }
}