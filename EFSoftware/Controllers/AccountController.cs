using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using EFSoftware.Models;
using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Service.Interfaces.ViewModels.Login;
using EFSoftware.Service.Interfaces;
using AutoMapper;
using EFSoftware.Service.Interfaces.ViewModels;
using EFSoftware.Models.Models;
using System.Security.Cryptography;
using System.IO;

namespace EFSoftware.Controllers
{

    public class AccountController : BaseController
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IConfiguration _config;
        private IUserService _userService;
        private ITMSEmployeeService _employeeService;
        private readonly IMapper _mapper;

        public AccountController(ITMSEmployeeService employeeService, IUserService userService, IMapper mapper, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager,  IConfiguration config)
        {
            _employeeService = employeeService;
             _userService = userService;
            _userManager = userManager;
            _signInManager = signInManager;
            _config = config;
            _mapper = mapper;
           
        }
        #region LOGIN
        [HttpPost]
        [Route("Login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return new BadRequestObjectResult(model);
            }
            var user = await _userManager.FindByNameAsync(model.Username);
            if (user != null)
            {
                var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, false, true);
                if (result.IsLockedOut)
                {
                    return new ObjectResult(new GenericResult(false, "Login failed!"));
                }
                else if (!result.Succeeded)
                {
                    //return new BadRequestObjectResult(result.ToString());
                    return new ObjectResult(new GenericResult(false, "Login failed!"));
                }

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(_config["Tokens:Issuer"],
                    _config["Tokens:Issuer"],
                    claims,
                    expires: DateTime.UtcNow.AddMinutes(30),
                    signingCredentials: creds);

                var data = new TokenViewModel()
                {
                    Role = user.Role,
                    UserId = user.Id,
                    Token = new JwtSecurityTokenHandler().WriteToken(token)
                };

                user.Token = data.Token;
                var vm = _mapper.Map<ApplicationUser, ApplicationUserViewModel>(user);
                _userService.UpdateAsync(vm);
                return new ObjectResult(new GenericResult(true, data));
                
            }
            return new ObjectResult(new GenericResult(false, "Login failed!"));
        }
        #endregion LOGIN

        #region LoginEmployee
        //decode_Password
        public static string DecryptString(string cipherText, string keyString)
        {
            var fullCipher = Convert.FromBase64String(cipherText);

            var iv = new byte[16];
            var cipher = new byte[16];

            Buffer.BlockCopy(fullCipher, 0, iv, 0, iv.Length);
            Buffer.BlockCopy(fullCipher, iv.Length, cipher, 0, iv.Length);
            var key = Encoding.UTF8.GetBytes(keyString);

            using (var aesAlg = Aes.Create())
            {
                using (var decryptor = aesAlg.CreateDecryptor(key, iv))
                {
                    string result;
                    using (var msDecrypt = new MemoryStream(cipher))
                    {
                        using (var csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                        {
                            using (var srDecrypt = new StreamReader(csDecrypt))
                            {
                                result = srDecrypt.ReadToEnd();
                            }
                        }
                    }

                    return result;
                }
            }
        }


        [HttpPost]
        [Route("LoginEmployee")]
        [AllowAnonymous]
        public async Task<IActionResult> LoginEmployee([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return new BadRequestObjectResult(model);
            }
            var employee = _employeeService.FindByEmailAsync(model.Username);
            if (employee != null)
            {
                var key = "E546C8DF278CD5931069B522E695D4F2";
                var dencrypted = DecryptString(employee.Password, key);
                if (model.Password != dencrypted)

                {
                    return new ObjectResult(new GenericResult(true, "Login failed!"));
                }
                else
                {
                    var claims = new[]
                    {
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                    };

                    var key1 = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));
                    var creds = new SigningCredentials(key1, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(_config["Tokens:Issuer"],
                        _config["Tokens:Issuer"],
                        claims,
                        expires: DateTime.UtcNow.AddMinutes(30),
                        signingCredentials: creds);

                    var data = new TokenViewModel()
                    {
                        UserId = employee.EmpID,
                        Token = new JwtSecurityTokenHandler().WriteToken(token)
                    };
                    return new ObjectResult(new GenericResult(true, data));
                }

            }
            return new ObjectResult(new GenericResult(false, "Login failed!"));
        }
        #endregion LoginEmployee

    }
}   