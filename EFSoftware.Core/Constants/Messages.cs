namespace EFSoftware.Core.Constants
{
    public class Messages
    {
        public class Common
        {
            public const string SomethingWentWrong = "Oops, something went wrong!";
            public const string InValidFormDataTitle = "Invalid Data";
            public const string InValidFormDataMessage = "Please see error detail in the Form";

            public const string Yes = "Yes";
            public const string No = "No";
        }

        public class App
        {
            public const string AddedFormat = "Added the App {0}";
            public const string UpdatedFormat = "Updated the App {0}";
            public const string DoesNotExist = "The App doest not exist";

            // Page Title
            public const string PageTitleList = "App";
            public const string PageTitleAdd = "New App";
            public const string PageTitleUpdate = "Update App";
        }

        public class User
        {
            public const string AddedFormat = "Added the User {0}";
            public const string UpdatedFormat = "Updated the User {0}";
            public const string DoesNotExist = "The User does not exist";
            public const string UserCodeExpired = "The code is expired, please try again with a new QR code on the app";
            public const string InvalidCode = "The code invalid";
            public const string UpdatedProfile = "Updated your profile";

            // Page Title
            public const string PageTitleList = "User";
            public const string PageTitleAdd = "New User";
            public const string PageTitleUpdate = "Update User";
            public const string PageTitleProfile = "Profile";
            public const string UserBanned = "This user has been banned from system";
            public const string UserNotVerify= "This user does not verify";
            public const string PhoneExist = "This number phone already exists in system";

        }


        public class SMSOTP
        {
            public const string DoesNotExist = "The OTP does not exist";
            public const string TokenExpired = "OTP is expired";
        }


        public class Auth
        {
            // Page Title
            public const string PageTitleAuthorized = "Authorized";
            public const string PageTitleConfirmEmail = "Confirm Email";
            public const string PageTitleForgetPassword = "Forget Password";
            public const string PageTitleSetPassword = "Set Password";
            public const string PageTitleSignIn = "Sign In";
            public const string PageTitleUnAuthorize = "Un Authorize";
            public const string PageTitleChangePassword = "Change Password";
            
            public const string _001 = "Please check email inbox to set new password for your account";
            public const string _002 = "Please check your email inbox to active your account";
            public const string _003 = "Now you can sign-in to the system";

            public const string _004 = "Change password successful";
        }

        public class Image
        {
            public const string UpdatedFormat = "Updated the Image {0}";
            public const string DoesNotExist = "The Image doest not exist";

            // Page Title
            public const string PageTitleList = "Image";
            public const string PageTitleAdd = "New Image";
            public const string PageTitleUpdate = "Update Image";
        }

        public class Status
        {
            public const string Successful = "Successful";
            public const string Fail = "Fail";
        }
        public class Payment
        {
            public const string DoesNotExist = "The stripe code doest not exist";
            public const string AmountInvalid = "Amount must greater than 0";
            public const string BanlanceIsNotEnough = "Your balance is not enough to buy";
            public const string CardDoesNotExist = "The user does not exist any card";
            public const string CardNotNull = "CardId can not be null";
            public const string Successful = "Payment successful";

        }
        public class Transaction
        {
            public const string QuantityIsNotEnough = "The quantity is not enough. Please try again";
            public const string ProductCodeInvalid = "Product code invalid";
            public const string AlreadySendReport = "The issue have already sent to system";
            public const string DoesNotExist = "The transaction does not exist";
            public const string ChangePriceOfProduct = "The price of product has been changed by system";
            public const string UpdateSuccessfully = "Update successfully";

        }

    }
}