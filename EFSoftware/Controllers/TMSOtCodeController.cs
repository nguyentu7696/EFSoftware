using System;
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
    public class TMSOtCodeController : BaseController
    {
        #region Constructor

        private ITMSOtCodeService _tmsOtCodeService;

        public TMSOtCodeController(ITMSOtCodeService tmsOtCodeService)
        {
            _tmsOtCodeService = tmsOtCodeService;
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
                var data = _tmsOtCodeService.GetAll();
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
                var data = _tmsOtCodeService.GetAllPaging(page, pageSize);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllPagingWithCompany")]
        public IActionResult GetAllPagingWithCompany(int page, int pageSize, int companyid, string filterByName = "")
        {
            try
            {
                var data = _tmsOtCodeService.GetAllPagingWithCompany(page, pageSize, companyid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllWithCompany")]
        public IActionResult GetAllWithCompany(int companyid, string filterByName = "")
        {
            try
            {
                var data = _tmsOtCodeService.GetAllWithCompany(companyid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

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
                    var data = _tmsOtCodeService.GetById(id);
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
        public IActionResult Add([FromBody]TMSOtCodeCreateViewModel Vm)
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
                    _tmsOtCodeService.Add(Vm);

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
        public IActionResult Update([FromBody]TMSOtCodeViewModel Vm)
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
                    if (Vm.StartDate == null)
                    {
                        Vm.StartDate = new DateTime(0001, 01, 01, 00, 00, 00);
                    }

                    if (Vm.EndDate == null)
                    {
                        Vm.EndDate = new DateTime(0001, 01, 01, 00, 00, 00);
                    }

                    _tmsOtCodeService.Update(Vm);

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
                    string result = _tmsOtCodeService.Delete(id);
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

        #endregion Public Method
    }
}