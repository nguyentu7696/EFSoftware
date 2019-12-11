using System.Collections.Generic;
using EFSoftware.Core.Share.Constants;
using EFSoftware.Core.Share.Exceptions;

namespace Kalms.Core.Utils
{
    public static class GrantTypeHelper
    {
        public static bool IsAllowAuthorizeFlow(GrantType grantType)
        {
            List<GrantType> allowTypes = new List<GrantType>
            {
                GrantType.Implicit,
                GrantType.AuthorizationCode,
                GrantType.AuthorizationCodePKCE
            };

            return allowTypes.Contains(grantType);
        }

        public static bool IsAllowGenerateToken(GrantType grantType)
        {
            List<GrantType> allowTypes = new List<GrantType>
            {
                GrantType.RefreshToken,
                GrantType.AuthorizationCode,
                GrantType.AuthorizationCodePKCE,
                GrantType.ResourceOwner,
                GrantType.ClientCredential
            };

            return allowTypes.Contains(grantType);
        }

        public static void CheckAllowAuthorizeFlow(GrantType grantType)
        {
            if (!IsAllowAuthorizeFlow(grantType))
            {
                throw new CoreException(nameof(ErrorCode.GrantTypeInValid), ErrorCode.GrantTypeInValid);
            }
        }

        public static void CheckAllowGenerateToken(GrantType grantType)
        {
            if (!IsAllowGenerateToken(grantType))
            {
                throw new CoreException(nameof(ErrorCode.GrantTypeInValid), ErrorCode.GrantTypeInValid);
            }
        }
    }
}