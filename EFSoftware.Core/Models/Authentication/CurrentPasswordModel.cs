using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Core.Models.Authentication
{
    public class CurrentPasswordModel
    {
        [Remote("CheckCurrentPassword", "Auth", "Api", HttpMethod = "POST", ErrorMessage = "Current password is wrong, please try again.")]
        [DataType(DataType.Password)]
        [Display(Name = "Current Password")]
        public string CurrentPassword { get; set; }
    }
}
