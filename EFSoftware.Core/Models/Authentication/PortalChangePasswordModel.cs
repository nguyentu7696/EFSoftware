using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace EFSoftware.Core.Models.Authentication
{
    public class PortalChangePasswordModel
    {
        public string Continue { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Current Password")]
        public string CurrentPassword { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "New Password")]
        public string Password { get; set; }

        [Display(Name = "Confirm New Password")]
        [DataType(DataType.Password)]
        [Compare(nameof(Password), ErrorMessage = "The Password didn't match.")]
        public string ConfirmPassword { get; set; }
    }
}
