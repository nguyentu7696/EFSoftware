using EFSoftware.Core.Share.Constants;

namespace EFSoftware.Core.Share.Models.Authentication
{
    public class RequestTokenModel
    {
        /// <summary>
        ///     GrantType must be ResourceOwner, Authorization Code (PKCE), RefreshToken 
        /// </summary>
        public GrantType GrantType { get; set; }

        public string ClientId { get; set; }

        public string State { get; set; }

        /// <summary>
        ///     Authorization Code 
        /// </summary>
        public string ClientSecret { get; set; }

        /// <summary>
        ///     Resource Owner Password 
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        ///     Resource Owner Password 
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        ///     AuthorizationCode 
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        ///     AuthorizationCode PKCE 
        /// </summary>
        public string CodeVerifier { get; set; }

        /// <summary>
        ///     AuthorizationCode + Implicit 
        /// </summary>
        public string RedirectUri { get; set; }

        /// <summary>
        ///     RefreshToken 
        /// </summary>
        public string RefreshToken { get; set; }
    }
}