using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Core.Constants
{
    public class Enums
    {
        public enum VerificationCodeType
        {
            [Display(Name = "User register")] UserRegister = 1,
            [Display(Name = "User forget password login")] UserForgetPasswordLogin = 2,
            [Display(Name = "User Payment Method")] UserPaymentMethod = 3,
        }
    }
}
