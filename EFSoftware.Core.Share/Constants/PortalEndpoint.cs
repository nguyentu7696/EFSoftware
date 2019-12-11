namespace EFSoftware.Core.Share.Constants
{
    public class PortalEndpoint
    {
        public const string AreaName = "portal";

        public static class Email
        {
            public const string EmailTemplateEndpoint = "~/templates/email";
        }
        
        
        public static class Home
        {
            private const string BaseEndpoint = "~/" + AreaName;

            public const string IndexEndpoint = BaseEndpoint;
            public const string SettingEndpoint = BaseEndpoint + "/settings";
            public const string UpdateTransactionDetailEndpoint = BaseEndpoint + "/transaction-detail";
            public const string TransactionDetailEndpoint = BaseEndpoint + "/transaction-detail/{id}";
            public const string OopsEndpoint = BaseEndpoint + "/oops";

            public const string OopsWithParamEndpoint = OopsEndpoint + "/{statusCode}";
        }
        
        public static class Auth
        {
            public const string SignInEndpoint = "~/signin";
            public const string SignOutEndpoint = "~/signout";
            public const string AuthorizedEndpoint = "~/authorized";
            public const string UnAuthorizeEndpoint = "~/un-authorize";
            public const string ForgetPasswordEndpoint = "~/forget-password";
            public const string SubmitForgetPasswordEndpoint = "~/forget-password";
            public const string ConfirmEmailEndpoint = "~/confirm-email";
            public const string ChangePasswordEndpoint = "~/change-password";
            public const string SetPasswordEndpoint = "~/set-password";
        }
        
        public static class User
        {
            private const string BaseEndpoint = "~/" + AreaName + "/users";
            public const string GetPagedEndpoint = BaseEndpoint;
            public const string AddEndpoint = BaseEndpoint + "/add";
            public const string EditEndpoint = BaseEndpoint + "/{id}";
            public const string EditProfileEndpoint = BaseEndpoint + "/profile";

        }
        
        public static class App
        {
            private const string BaseEndpoint = "~/" + AreaName + "/apps";
            public const string GetPagedEndpoint = BaseEndpoint;
            public const string AddEndpoint = BaseEndpoint + "/add";
            public const string EditEndpoint = BaseEndpoint + "/{id}";
            public const string GenerateSecretEndpoint = BaseEndpoint + "/generate-secret/{id}";
        }
        
        public static class Image
        {
            private const string BaseEndpoint = "~/" + AreaName + "/images";
            public const string GetPagedEndpoint = BaseEndpoint;
            public const string AddEndpoint = BaseEndpoint + "/add";
            public const string EditEndpoint = BaseEndpoint + "/{id}";
            public const string DownloadEndpoint = "~/download/{id}";
        } 
    }
}