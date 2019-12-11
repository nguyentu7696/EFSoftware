using System.ComponentModel.DataAnnotations;
using EFSoftware.Core.Share.Constants;

namespace EFSoftware.Core.Models.Authentication
{
    public class AuthorizeModel
    {
        public string ClientId { get; set; }

        /// <summary>
        ///     Redirect URI 
        /// </summary>
        public string Continue { get; set; }

        public GrantType GrantType { get; set; } = GrantType.ResourceOwner;

        public string State { get; set; }

        /// <summary>
        ///     AuthorizationCode PKCE 
        /// </summary>
        public string CodeChallenge { get; set; }

        /// <summary>
        ///     AuthorizationCode PKCE 
        /// </summary>
        public CodeChallengeMethod CodeChallengeMethod { get; set; } = CodeChallengeMethod.S256;

        /// <summary>
        ///     Hint - pre-enter User Name 
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        ///     Hint - pre-enter Password 
        /// </summary>
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}