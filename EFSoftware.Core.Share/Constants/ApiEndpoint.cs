namespace EFSoftware.Core.Share.Constants
{
    public static class ApiEndpoint
    {
        public const string AreaName = "api";

        public static class App
        {
            private const string BaseEndpoint = "~/" + AreaName + "/apps";
            public const string GetPagedEndpoint = BaseEndpoint;
            public const string GetDataTableEndpoint = BaseEndpoint + "/datatable";
            public const string GetEndpoint = BaseEndpoint + "/{id}";
            public const string CreateEndpoint = BaseEndpoint + "/add";
            public const string UpdateEndpoint = BaseEndpoint + "/update";
            public const string GenerateSecretEndpoint = BaseEndpoint + "/{id}/generate-secret";
            public const string DeleteEndpoint = BaseEndpoint + "/{id}/delete";

            public const string CheckUniqueNameEndpoint = BaseEndpoint + "/is-unique-name";
        }

        public static class Auth
        {
            private const string BaseEndpoint = "~/" + AreaName + "/auth";
            /// <summary>
            /// login from app
            /// </summary>
            public const string TokenEndpoint = BaseEndpoint + "/token";
            public const string TokenBySocial = BaseEndpoint + "/token-by-social";
            public const string RequestOTPEndpoint = BaseEndpoint + "/otp/{phone}";
            public const string ChecjOTPEndpoint = BaseEndpoint + "/check-otp";
            public const string VerifyPhoneEndpoint = BaseEndpoint + "/verify-phone";
            public const string VerifyNewPhoneEndpoint = BaseEndpoint + "/verify-new-phone";
            public const string ChangePasswordEndpoint = BaseEndpoint + "/change-password";
            public const string CheckCurrentPasswordByOTPEndpoint = BaseEndpoint + "/check-current-password";
            public const string ChangePasswordByOTPEndpoint = BaseEndpoint + "/change-password-by-OTP";
            public const string CheckUniqueEmailEndpoint = "~/is-unique-email";
            public const string CheckUniquePhoneEndpoint = "~/is-unique-phone";
            public const string CheckUniqueUserNameEndpoint = "~/is-unique-username";
            public const string CheckCurrentPassword = BaseEndpoint + "/check-current-password";
            public const string RequestOTPNewPhoneEndpoint = BaseEndpoint + "/otp-new-phone";

        }


        public static class User
        {
            private const string BaseEndpoint = "~/" + AreaName + "/users";
            public const string GetPagedEndpoint = BaseEndpoint;
            public const string GetDataTableEndpoint = BaseEndpoint + "/datatable";
            public const string GetEndpoint = BaseEndpoint + "/{id}";
            public const string ProfileEndpoint = BaseEndpoint + "/profile";
            public const string ChangePhoneEndpoint = BaseEndpoint + "/change-phone";
            public const string CreateEndpoint = BaseEndpoint + "/add";
            public const string UpdateEndpoint = BaseEndpoint + "/update";
            public const string DeleteEndpoint = BaseEndpoint + "/{id}";
            public const string BonusEndpoint = BaseEndpoint + "/{id}/bonus";
            public const string GetUserCodeEndpoint = BaseEndpoint + "/user-code";
            public const string RegisterEndpoint = BaseEndpoint + "/register";
        }

        public static class VendingMachine
        {
            
            private const string BaseEndpoint = "~/" + AreaName + "/vending-machine";
            /// <summary>
            /// Get list all product from machine code
            /// </summary>
            public const string GetEndpoint = BaseEndpoint;
        }

        public static class Master
        {
            private const string BaseEndpoint = "~/" + AreaName + "/master";
            public const string GetEndpoint = BaseEndpoint;
        }

        public static class Image
        {
            private const string BaseEndpoint = "~/" + AreaName + "/images";
            public const string GetPagedEndpoint = BaseEndpoint;
            public const string GetEndpoint = BaseEndpoint + "/{id}";
            public const string GetDataTableEndpoint = BaseEndpoint + "/datatable";
            public const string UploadBase64Endpoint = BaseEndpoint + "/base64";
            public const string UploadMultiPartEndpoint = BaseEndpoint + "/multi-part";
            public const string DeleteEndpoint = BaseEndpoint + "/{id}";
        }

        public static class Test
        {
            private const string BaseEndpoint = "~/" + AreaName + "/test";
            public const string GetPagedEndpoint = BaseEndpoint;
            public const string SendCodeEndpoint = BaseEndpoint + "/send-code";
            public const string AddCardEndpoint = BaseEndpoint + "/add-card";
            public const string TopUpWithNewCardEndpoint = BaseEndpoint + "/top-up-with-new-card";
            public const string TopUpWithCardAlreadyExistEndpoint = BaseEndpoint + "/top-up-with-card-already-exist";

        }

        public static class Admin
        {
            private const string BaseEndpoint = "~/" + AreaName + "/admin";
            public const string GetTransactionIdEndpoint = BaseEndpoint + "/transasction/{id}";
        }

        public static class Payment
        {
            private const string BaseEndpoint = "~/" + AreaName + "/payment";
            public const string GetMyCardEndpoint = BaseEndpoint;
            public const string GetPaymentInfoEndpoint = BaseEndpoint + "/info";
            public const string ConfirmPaymentEndpoint = BaseEndpoint + "/confirm-payment";
            public const string SendCodeEndpoint = BaseEndpoint + "/send-code";
            public const string AddCardEndpoint = BaseEndpoint + "/add-card";
            public const string MarkAsDefaultCardEndpoint = BaseEndpoint + "/mark-as-default-card";
            public const string TopUpWithNewCardEndpoint = BaseEndpoint + "/top-up-with-new-card";
            public const string TopUpWithCardAlreadyExistEndpoint = BaseEndpoint + "/top-up-with-card-already-exist";
            public const string PaymentWithNewCardEndpoint = BaseEndpoint + "/payment-with-new-card";
            public const string PaymentWithCardAlreadyExistEndpoint = BaseEndpoint + "/payment-with-card-already-exist";
            public const string PaymentWithWalletEndpoint = BaseEndpoint + "/payment-with-wallet";
            public const string DeleteCardEndpoint = BaseEndpoint + "/delete-card/{cardId}";

        }

        public static class Transaction
        {
            private const string BaseEndpoint = "~/" + AreaName + "/transaction";
            public const string GetEndpoint = BaseEndpoint;
            public const string GetMyTransactionEndpoint = BaseEndpoint + "/my-transaction";
            public const string GetTransactionIdEndpoint = BaseEndpoint + "/{id}";
            public const string BonusEndpoint = BaseEndpoint + "/{id}/bonus";
            public const string GetReportIssueTypeEndpoint = BaseEndpoint + "/report-issue-type";
            public const string UpdateStatusEndpoint = BaseEndpoint + "/update-status-report-issue";
            public const string ReportIssueEndpoint = BaseEndpoint + "/report-issue";

        }
        public static class External
        {
            private const string BaseEndpoint = "~/" + AreaName + "/external";
            public const string GetPagedEndpoint = BaseEndpoint;
            public const string PaymentEndpoint = BaseEndpoint + "/payment";
        }
    }
}