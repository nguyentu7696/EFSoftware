using EFSoftware.Core.Share.Models.User;

namespace EFSoftware.Core.Models.Authentication
{
    public class SignInByFacebookModel
    {
        public string ClientId { get; set; }
        
        public string ClientSecret { get; set; }
        
        public string FacebookId { get; set; }

        public UpdateProfileModel Profile { get; set; }
    }
}