using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace EFSoftware.Core.Share.Constants
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum GrantType
    {
        [Display(Name = "Client Credential")]
        ClientCredential,

        [Display(Name = "Authorization Code")]
        AuthorizationCode,

        [Display(Name = "Authorization Code with PKCE")]
        AuthorizationCodePKCE,

        [Display(Name = "Implicit")]
        Implicit,

        [Display(Name = "Resouce Owner Password")]
        ResourceOwner,

        [Display(Name = "Refresh Token")]
        RefreshToken
    }
}