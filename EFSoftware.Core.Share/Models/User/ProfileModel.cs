using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Elect.Web.DataTable.Attributes;
using EFSoftware.Core.Share.Constants;
using Microsoft.AspNetCore.Mvc;

namespace EFSoftware.Core.Share.Models.User
{
    public class ProfileModel
    {
        public string Id { get; set; }
        
        public string Continue { get; set; }
        
        [Display(Name = "Permissions")]
        public List<Permission> ListPermission { get; set; } = new List<Permission>();

        public string Email { get; set; }
        
        [Display(Name = "Email Confirmed At")]
        public DateTimeOffset? EmailConfirmedTime { get; set; }
        
        public string Phone { get; set; }

        [Display(Name = "Phone Confirmed At")]
        public DateTimeOffset? PhoneConfirmedTime { get; set; }

        [Display(Name = "Created At")]
        public DateTimeOffset CreatedTime { get; set; }

        [Display(Name = "Updated At")]
        public DateTimeOffset LastUpdatedTime { get; set; }

        // Editable
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        
        [Remote("CheckUniqueUserName", "Auth", "Api", HttpMethod = "POST", AdditionalFields = "Id", ErrorMessage = "The user name is already exist, please try another.")]
        [Display(Name = "User Name")]
        public string UserName { get; set; }
        
        [Display(Name = "Avatar")]
        public string AvatarUrl { get; set; }
        
        [Display(Name = "DOB")]
        public DateTime? DateOfBirth { get; set; }

        [Display(Name = "Facebook Id")]
        public string FacebookId { get; set; }

        [DataTableIgnore]
        [Display(Name = "Balance")]
        public string Balance { get; set; }
    }
}