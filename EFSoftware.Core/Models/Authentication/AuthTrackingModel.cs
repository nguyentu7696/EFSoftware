using System.Collections.Generic;

namespace EFSoftware.Core.Models.Authentication
{
    public class AuthTrackingModel
    {
        public string CurrentUserId { get; set; }

        public List<UserSignInTrackingModel> Users { get; set; } = new List<UserSignInTrackingModel>();
    }
}