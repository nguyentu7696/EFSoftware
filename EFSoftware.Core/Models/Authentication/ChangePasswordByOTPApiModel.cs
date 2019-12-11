namespace EFSoftware.Core.Models.Authentication
{
    public class ChangePasswordByOTPApiModel
    {
        public string Phone { get; set; }
        
        public string OTP { get; set; }
        
        public string NewPassword { get; set; }
    }
}