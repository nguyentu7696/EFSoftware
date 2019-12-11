using System.ComponentModel.DataAnnotations;

namespace EFSoftware.Core.Models.Authentication
{
    public class SetPasswordModel
    {
        public string Token { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Confirm Password")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }
    }
}