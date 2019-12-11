namespace EFSoftware.Core.Models.Authentication
{
    public class ChangePasswordApiModel
    {
        public string CurrentPassword { get; set; }
        
        public string NewPassword { get; set; }
    }
}