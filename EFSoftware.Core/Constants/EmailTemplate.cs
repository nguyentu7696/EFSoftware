using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace EFSoftware.Core.Constants
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum EmailTemplate
    {
        /// <summary>
        ///     This email will be sent whenever a user signs up or admin invite a user. 
        /// </summary>
        [Display(Name = "Verify Email")]
        VerifyEmail,

        /// <summary>
        ///     This email will be sent once the user make a first success login. 
        /// </summary>
        [Display(Name = "Welcome")]
        Welcome,

        /// <summary>
        ///     This email will be sent whenever a user requests a password change. The password will
        ///     not be changed until the user follows the verification link in the email.
        /// </summary>
        [Display(Name = "Change Password")]
        ChangePassword,
    }
}