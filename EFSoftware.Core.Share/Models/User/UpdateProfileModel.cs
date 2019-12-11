using System;

namespace EFSoftware.Core.Share.Models.User
{
    public class UpdateProfileModel
    {
        public string Email { get; set; }

        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public string AvatarUrl { get; set; }
        
        public DateTime? DateOfBirth { get; set; }
    }
}