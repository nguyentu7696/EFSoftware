namespace EFSoftware.Core.Share.Constants
{
    /// <summary>
    ///     Unique Error Code
    /// </summary>
    /// <remarks>
    ///     Use "nameof(ErrorCode.Key)" to get unique code
    /// </remarks>
    /// <remarks>
    ///     Use ErrorCode.Key to get message
    /// </remarks>
    public class ErrorCode
    {
        // Common
        public const string BadRequest = "Bad Request";
        public const string UnAuthenticated = "Un-Authenticate";
        public const string UnVerified = "Un-Verified";

        public const string UnAuthorized = "Forbidden";
        public const string NotFound = "Not Found";
        public const string Unknown = "Oops! Something went wrong, please try again later.";
        public const string NotUnique = "The resource is already, please try another.";
        public const string TokenExpired = "The Token is already expired.";
        public const string TokenInvalid = "The Token is invalid.";

        // Client
        public const string GrantTypeInValid = "Grant Type is invalid.";
        public const string SecretInValid = "Secret is invalid.";

        // User
        public const string UserPasswordWrong = "Password is wrong.";
        public const string UserBanned = "User is banned.";
        public const string UserInActive = "User is in-active.";
        public const string UserConfirmEmailTokenExpireOrInvalid = "Confirm email token expired or invalid.";
        public const string UserSetPasswordTokenExpireOrInvalid = "Set password token expired or invalid.";
        
        // Access Token
        public const string AuthCodeInValid = "The Code is invalid.";
        public const string StripeException = "StripeException";
        public const string InvalidParameter = "Invalid Parameter";


    }
}