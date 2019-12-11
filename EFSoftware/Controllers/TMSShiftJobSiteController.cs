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
    public class TMSShiftJobSiteController : BaseController
    {
        #region Constructor

        private ITMSShiftJobSiteService _tmsShiftJobSiteService;

        public TMSShiftJobSiteController(ITMSShiftJobSiteService tmsShiftJobSiteService)
        {
            _tmsShiftJobSiteService = tmsShiftJobSiteService;
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
                var data = _tmsShiftJobSiteService.GetAll();
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
                var data = _tmsShiftJobSiteService.GetAllPaging(page, pageSize);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllPagingWithJobSite")]
        public IActionResult GetAllPagingWithJobSite(int page, int pageSize, int jobsiteid, string filterByName = "")
        {
            try
            {
                var data = _tmsShiftJobSiteService.GetAllPagingWithJobSite(page, pageSize, jobsiteid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllWithJobSiteRoster")]
        public IActionResult GetAllWithJobSiteRoster(int jobsiteid, string filterByName = "")
        {
            try
            {
                var data = _tmsShiftJobSiteService.GetAllWithJobSiteRoster(jobsiteid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllWithJobSite")]
        public IActionResult GetAllWithJobSite(int jobsiteid ,string filterByName = "")
        {
            try
            {
                var data = _tmsShiftJobSiteService.GetAllWithJobSite(jobsiteid , filterByName);
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
                    var data = _tmsShiftJobSiteService.GetById(id);
                    return new OkObjectResult(new GenericResult(true, data));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }

        [HttpGet]
        [Route("GetListWorkingHours")]
        public IActionResult GetListWorkingHours()
        {
            try
            {
                var data = _tmsShiftJobSiteService.GetListWorkingHours();
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
        public IActionResult AddFromCompany([FromBody]TMSShiftJobSiteCreateViewModel Vm)
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
                    var data = _tmsShiftJobSiteService.AddFromCompany(Vm);
                    return new OkObjectResult(new GenericResult(true, data));
                }
                catch(Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult Add([FromBody]TMSShiftJobSiteCreateViewModel Vm)
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
                    var data = _tmsShiftJobSiteService.Add(Vm);

                    return new OkObjectResult(new GenericResult(true, data));
                }
                catch(Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }
        #endregion POST

        #region PUT

        [HttpPut]
        [Route("Update")]
        public IActionResult Update([FromBody]TMSShiftJobSiteViewModel Vm)
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
                    _tmsShiftJobSiteService.Update(Vm);

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
                    _tmsShiftJobSiteService.Delete(id);

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