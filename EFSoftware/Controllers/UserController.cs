using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Service.Interfaces;
using EFSoftware.Service.Interfaces.ViewModels;
using EFSoftware.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EFSoftware.Controllers
{
    public class UserController : BaseController
    {
        #region Contructor

        private IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        #endregion Contructor

        #region POST

        [HttpPost]
        [Route("Add")]
        public async Task<IActionResult> Add([FromBody]ApplicationUserViewModel Vm)
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
                    var result = await _userService.AddAsync(Vm);

                    if (result)
                    {
                        return new OkObjectResult(new GenericResult(result, true, "Add Success!!!"));
                    }
                    else
                    {
                        return new OkObjectResult(new GenericResult(false, "Add Error!!!"));
                    }
                }
                catch (Exception)
                {
                    return new BadRequestObjectResult(new GenericResult(false, "HasError"));
                    throw;
                }
            }
        }

        #endregion POST

        #region PUT 

        [HttpPut]
        [Route("Update")]
        public IActionResult Update([FromBody]ApplicationUserViewModel Vm)
        {
            if (Vm.Id == null)
            {
                ModelState.AddModelError("Model.Id", "Model.Id is Requied");
            }

            if (!ModelState.IsValid)
            {
                var allErrors = ModelState.Values.SelectMany(v => v.Errors);
                return new BadRequestObjectResult(new GenericResult(false, allErrors));
            }
            else
            {
                try
                {
                    _userService.UpdateAsync(Vm);
                    return new OkObjectResult(new GenericResult(true, "UpdateSuccess"));
                }
                catch (Exception)
                {
                    return new OkObjectResult(new GenericResult(true, "UpdateError"));
                    throw;
                }
            }
        }

        #endregion PUT
    }
}