using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Kalms.Core.Share.Constants;
using Elect.Web.DataTable.Attributes;
using Elect.Web.DataTable.Models.Constants;
using Microsoft.AspNetCore.Mvc;

namespace EFSoftware.Core.Share.Models.User
{
    public class CreateUserModel
    {
        [Remote("CheckUniqueEmail", "Auth", "Api", HttpMethod = "POST", AdditionalFields = "Id", ErrorMessage = "The email is already exist, please try another.")]
        [DataTable(DisplayName = "Email", Order = 6, IsVisible = false)]
        public string Email { get; set; }
        
        [Remote("CheckUniquePhone", "Auth", "Api", HttpMethod = "POST", AdditionalFields = "Id", ErrorMessage = "The phone is already exist, please try another.")]
        [DataTable(DisplayName = "Phone", Order = 7)]
        public string Phone { get; set; }
        
        [DataTableIgnore]
        [Display(Name = "Permissions")]
        public List<Permission> ListPermission { get; set; } = new List<Permission>();
        
        [Display(Name = "First Name")]
        [DataTable(DisplayName = "First Name", Order = 8)]
        public string FirstName { get; set; }

        [Display(Name = "Last Name")]
        [DataTable(DisplayName = "Last Name", Order = 9)]
        public string LastName { get; set; }
        
        [Display(Name = "DOB")]
        [DataTable(DisplayName = "DOB", Order = 10)]
        public DateTime? DateOfBirth { get; set; } = DateTime.Today.AddYears(-16);
    }

    public class UserModel : CreateUserModel
    {
        [DataTable(IsVisible = false, Order = 1)]
        public string Id { get; set; }
        
        [DataTable(DisplayName = "Avatar", Order = 3)]
        [Display(Name = "Avatar")]
        public string AvatarUrl { get; set; }

        [Remote("CheckUniqueUserName", "Auth", "Api", HttpMethod = "POST", AdditionalFields = "Id", ErrorMessage = "The user name is already exist, please try another.")]
        [Display(Name = "User Name")]
        [DataTable(DisplayName = "User Name", Order = 7, IsVisible = false)]
        public string UserName { get; set; }

        [Display(Name = "Banned")]
        [DataTableIgnore]
        public bool IsBanned { get; set; }

        [Display(Name = "Banned At")]
        [DataTable(DisplayName = "Banned At", Order = 10)]
        public DateTimeOffset? BannedTime { get; set; }

        [Display(Name = "Banned Remark")]
        [DataTableIgnore]
        public string BannedRemark { get; set; }
        
        [Display(Name = "Phone Confirmed At")]
        [DataTableIgnore]
        public DateTimeOffset? PhoneConfirmedTime { get; set; }

        [Display(Name = "Email Confirmed At")]
        [DataTableIgnore]
        public DateTimeOffset? EmailConfirmedTime { get; set; }

        [Display(Name = "Created By")]
        [DataTableIgnore]
        public string CreatedBy { get; set; }

        [Display(Name = "Updated By")]
        [DataTableIgnore]
        public string LastUpdatedBy { get; set; }

        [Display(Name = "Created At")]
        [DataTable(DisplayName = "Created At", Order = 999, IsVisible = false)]
        public DateTimeOffset CreatedTime { get; set; }

        [Display(Name = "Updated At")]
        [DataTable(DisplayName = "Updated At", Order = 1000, IsVisible = false, SortDirection = SortDirection.Descending)]
        public DateTimeOffset LastUpdatedTime { get; set; }

        [DataTable(DisplayName = "App", Order = 1001, IsSearchable = false, IsVisible = false)]
        public bool IsApp { get; set; }
         
        [DataTableIgnore]
        public string Permissions { get; set; }
        
        [DataTableIgnore]
        [Display(Name = "Facebook Id")]
        public string FacebookId { get; set; }

        [DataTableIgnore]
        [Display(Name = "User Code")]
        public string UserCode { get; set; }

     
        [Display(Name = "Balance")]
        [DataTable(DisplayName = "Balance", Order = 100, IsSearchable = false, IsVisible = true)]
        public string Balance { get; set; }

        [DataTableIgnore]
        public bool IsHavePassword { get; set; }
    }
}