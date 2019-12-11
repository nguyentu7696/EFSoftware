using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class ApplicationUserViewModel
    {
        public Guid? Id { set; get; }
        public string UserName { set; get; }
        [Required]
        public string Password { set; get; }
        [EmailAddress]
        [Required]
        public string Email { set; get; }
        [Required]
        public string FullName { get; set; }
        

        public string JobTitle { get; set; }

        public string PhoneNumber { get; set; }

        public string Configuration { get; set; }

        public bool IsEnabled { get; set; }
        [Required]
        public Roles Role { get; set; }
        public string Token { get; set; }
    }
}
