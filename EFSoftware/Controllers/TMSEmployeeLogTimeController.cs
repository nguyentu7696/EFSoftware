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
    public class TMSEmployeeLogTimeController : BaseController
    {
        #region Constructor

        private ITMSEmployeeLogTimeService _tmsEmployeeLogTimeService;

        public TMSEmployeeLogTimeController(ITMSEmployeeLogTimeService tmsEmployeeLogTimeService)
        {
            _tmsEmployeeLogTimeService = tmsEmployeeLogTimeService;
        }

        #endregion Constructor

        #region GET

        [HttpGet]
        [Route("GetAllEmployeeLogTime")]
        public IActionResult GetAllEmployeeLogTime(DateTime dateLogTime,int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            try
            {
                var data = _tmsEmployeeLogTimeService.GetAllEmployeeLogTime(dateLogTime, companyid, departmentid, siteid, jobsiteid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }
        [HttpGet]
        [Route("GetAllEmployeeWithMonth")]
        public IActionResult GetAllEmployeeWithMonth(DateTime dateLogTime, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            try
            {
                var data = _tmsEmployeeLogTimeService.GetAllEmployeeWithMonth(dateLogTime, companyid, departmentid, siteid, jobsiteid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllPagingEmployeeLogTime")]
        public IActionResult GetAllPagingEmployeeLogTime(int page, int pageSize, int companyid, DateTime dateLogTime, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            try
            {
                var data = _tmsEmployeeLogTimeService.GetAllPagingEmployeeLogTime(page, pageSize, dateLogTime, companyid, departmentid, siteid, jobsiteid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        //Absent
        [HttpGet]
        [Route("GetAllEmployeeAbsent")]
        public IActionResult GetAllEmployeeAbsent(DateTime dateLogTime, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            try
            {
                var data = _tmsEmployeeLogTimeService.GetAllEmployeeAbsent(dateLogTime, companyid, departmentid, siteid, jobsiteid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllPagingEmployeeAbsent")]
        public IActionResult GetAllPagingEmployeeAbsent(int page, int pageSize, int companyid, DateTime dateLogTime, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            try
            {
                var data = _tmsEmployeeLogTimeService.GetAllPagingEmployeeAbsent(page, pageSize, dateLogTime, companyid, departmentid, siteid, jobsiteid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        //Modal
        [HttpGet]
        [Route("GetAllEmployeeModal")]
        public IActionResult GetAllEmployeeModal(int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            try
            {
                var data = _tmsEmployeeLogTimeService.GetAllEmployeeModal(companyid, departmentid, siteid, jobsiteid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetAllPagingEmployeeModal")]
        public IActionResult GetAllPagingEmployeeModal(int page, int pageSize, int companyid, int departmentid, int siteid, int jobsiteid, string filterByName = "")
        {
            try
            {
                var data = _tmsEmployeeLogTimeService.GetAllPagingEmployeeModal(page, pageSize, companyid, departmentid, siteid, jobsiteid, filterByName);
                return new OkObjectResult(new GenericResult(true, data));
            }
            catch (Exception ex)
            {
                return new OkObjectResult(new GenericResult(false, ex.Message));
            }
        }

        [HttpGet]
        [Route("GetWithEmpIdAndDateLog")]
        public IActionResult GetWithEmpIdAndDateLog(int employeeId, DateTime dateLogTime)
        {
            try
            {
                var data = _tmsEmployeeLogTimeService.GetWithEmpIdAndDateLog(employeeId, dateLogTime);
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
        public IActionResult Add([FromBody]TMSEmployeeLogTimeViewModel Vm)
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
                    _tmsEmployeeLogTimeService.Add(Vm);

                    return new OkObjectResult(new GenericResult(true, "Add success!!!"));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }

        [HttpPost]
        [Route("UpdateAttendance")]
        public IActionResult UpdateAttendance([FromBody]List<TMSEmployeeLogTimeViewModel> Vm)
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
                    for(var i = 0 ; i< Vm.Count(); i++)
                    {
                        if(Vm[i].AttType == -1)
                        {
                            _tmsEmployeeLogTimeService.Delete(Vm[i].Id);
                        }
                        else
                        {
                            _tmsEmployeeLogTimeService.Add(Vm[i]);
                        }
                    }

                    return new OkObjectResult(new GenericResult(true, "Add success!!!"));
                }
                catch (Exception ex)
                {
                    return new OkObjectResult(new GenericResult(false, ex.Message));
                }
            }
        }


        #endregion POST
    }
}