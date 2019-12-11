using System;
using EFSoftware.Core.Share.Constants;
using EFSoftware.Core.Share.Utils;

namespace EFSoftware.Core.Models.Authentication
{
    public class AuthorizeCodeStorageModel
    {
        public string ClientId { get; set; }

        public GrantType GrantType { get; set; } = GrantType.AuthorizationCode;

        /// <summary>
        ///     AuthorizationCode PKCE 
        /// </summary>
        public string CodeChallenge { get; set; }

        /// <summary>
        ///     AuthorizationCode PKCE 
        /// </summary>
        public CodeChallengeMethod CodeChallengeMethod { get; set; } = CodeChallengeMethod.S256;

        public string Code { get; set; }

        public string RedirectUri { get; set; }

        public Guid UserId { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public DateTimeOffset CreatedTime { get; set; } = CoreHelper.SystemTimeNow;
    }
}