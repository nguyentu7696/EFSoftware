﻿
namespace EFSoftware.Core.Share.Models.User
{
    public class LoggedInUserModel : UserModel
    {
        public string AccessToken { get; set; }
    }
}