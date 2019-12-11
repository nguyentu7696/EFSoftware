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
    public class TMSAllowanceJobsiteController : BaseController
    {
        #region Constructor

        private ITMSAllowanceJobsiteService _tmsAllowanceJobsiteService;

        public TMSAllowanceJobsiteController(ITMSAllowanceJobsiteService tmsAllowanceJobsiteService)
        {
            _tmsAllowanceJobsiteService = tmsAllowanceJobsiteService;
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
                var data = _tmsAllowanceJobsiteService.GetAll();
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch(Exception ex)
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
                var data = _tmsAllowanceJobsiteService.GetAllPaging(page, pageSize);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllPagingWithCompany")]
        public IActionResult GetAllPagingWithCompany(int page, int pageSize, int companyid)
        {
            try
            {
                var data = _tmsAllowanceJobsiteService.GetAllPagingWithCompany(page, pageSize, companyid);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllWithCompany")]
        public IActionResult GetAllWithCompany(int companyid)
        {
            try
            {
                var data = _tmsAllowanceJobsiteService.GetAllWithCompany(companyid);
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
                    var data = _tmsAllowanceJobsiteService.GetById(id);
                    return new OkObjectResult(new GenericResult(true, data));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }

        [HttpGet]
        [Route("GetAllPagingWithJobsite")]
        public IActionResult GetAllPagingWithJobsite(int page, int pageSize, int companyid, int jobsiteid, string filterByName = "")
        {
            try
            {
                var data = _tmsAllowanceJobsiteService.GetAllPagingWithJobsite(page, pageSize, companyid, jobsiteid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllWithJobsite")]
        public IActionResult GetAllWithJobsite(int companyid, int jobsiteid, string filterByName = "")
        {
            try
            {
                var data = _tmsAllowanceJobsiteService.GetAllWithJobsite(companyid, jobsiteid, filterByName);
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
        [Route("AddFromCompany")]
        public IActionResult AddFromCompany([FromBody]TMSAllowanceJobsiteCreateViewModel Vm)
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
                    var data = _tmsAllowanceJobsiteService.AddFromCompany(Vm);
                    return new OkObjectResult(new GenericResult(true, data));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult Add([FromBody]TMSAllowanceJobsiteCreateViewModel Vm)
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
                    _tmsAllowanceJobsiteService.Add(Vm);

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
        public IActionResult Update([FromBody]TMSAllowanceJobsiteViewModel Vm)
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

                    _tmsAllowanceJobsiteService.Update(Vm);

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
                    _tmsAllowanceJobsiteService.Delete(id);

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