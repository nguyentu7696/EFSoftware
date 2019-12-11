using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace EFSoftware.Core.Models.Authentication
{
    public class ChangePasswordModel
    {
        public string Continue { get; set; }

        [Remote("CheckCurrentPassword", "Auth", "Api", HttpMethod = "POST", ErrorMessage = "Current password is wrong, please try again.")]
        [DataType(DataType.Password)]
        [Display(Name = "Current Password")]
        public string CurrentPassword { get; set; }
        
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Confirm Password")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }
    }
}