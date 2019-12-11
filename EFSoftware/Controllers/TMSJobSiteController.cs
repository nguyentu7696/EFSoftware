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
    public class TMSJobSiteController : BaseController
    {
        #region Constructor

        private ITMSJobSiteService _iTMSJobSiteService;

        public TMSJobSiteController(ITMSJobSiteService iTMSJobSiteService)
        {
            _iTMSJobSiteService = iTMSJobSiteService;
        }

        #endregion Constructor

        #region GET

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll(string filterByName = "")
        {
            try
            {
                var data = _iTMSJobSiteService.GetAll(filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }


        [HttpGet]
        [Route("GetAllWithSite")]
        public IActionResult GetAllWithSite(int companyid, int departmentid, int siteid, string filterByName = "")
        {
            try
            {
                var data = _iTMSJobSiteService.GetAllWithSite(companyid, departmentid, siteid, filterByName);
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
                var data = _iTMSJobSiteService.GetAllPaging(page, pageSize);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllPagingWithSite")]
        public IActionResult GetAllPagingWithSite(int page, int pageSize, int companyid, int departmentid, int siteid, string filterByName = "")
        {
            try
            {
                var data = _iTMSJobSiteService.GetAllPagingWithSite(page, pageSize, companyid, departmentid, siteid, filterByName);
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
                    var data = _iTMSJobSiteService.GetById(id);
                    return new OkObjectResult(new GenericResult(true, data));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }

        [HttpGet]
        [Route("GetAllForDepartment")]
        public IActionResult GetAllForDepartment(int siteid, int departmentid, string filterByName = "")
        {
            try
            {
                var data = _iTMSJobSiteService.GetAllForDepartment(siteid, departmentid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllPagingForDepartment")]
        public IActionResult GetAllPagingForDepartment(int page, int pageSize, int siteid, int departmentid, string filterByName = "")
        {
            try
            {
                var data = _iTMSJobSiteService.GetAllPagingForDepartment(page, pageSize, siteid, departmentid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllListJobSite")]
        public IActionResult GetAllListJobSite(int companyid, int departmentid, int siteid , string filterByName = "")
        {
            try
            {
                var data = _iTMSJobSiteService.GetAllListJobSite(companyid, departmentid, siteid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllPagingListJobSite")]
        public IActionResult GetAllPagingListJobSite(int page, int pageSize, int companyid, int departmentid, int siteid, string filterByName = "")
        {
            try
            {
                var data = _iTMSJobSiteService.GetAllPagingListJobSite(page, pageSize, companyid, departmentid, siteid, filterByName);
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
        public IActionResult Add([FromBody]JobSiteViewModel Vm)
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
                    _iTMSJobSiteService.Add(Vm);

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
        public IActionResult Update([FromBody]JobSiteUpdateModel Vm)
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
                    _iTMSJobSiteService.Update(Vm);

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
                    string result = _iTMSJobSiteService.Delete(id);
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