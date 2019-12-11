using System;
using EFSoftware.Core.Share.Utils;

namespace EFSoftware.Core.Models.Authentication
{
    public class UserSignInTrackingModel
    {
        public string Id { get; set; }
        
        public string UserName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public DateTimeOffset LastUpdatedTime { get; set; } = CoreHelper.SystemTimeNow;

        public bool IsLoggedIn { get; set; } = true;

        public string AccessToken { get; set; }
    }
}