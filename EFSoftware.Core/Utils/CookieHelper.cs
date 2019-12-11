using EFSoftware.Core.Models.Authentication;
using Elect.Core.LinqUtils;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using System.Linq;

namespace EFSoftware.Core.Utils
{
    public class CookieHelper : Share.Utils.CookieHelper
    {
        private const string AuthKey = "Auth";


        public static AuthTrackingModel SetAuthTracking(UserSignInTrackingModel userSignInTracking,
            HttpContext httpContext, IDataProtectionProvider protectionProvider)
        {
            // Get Cookie

            var authTracking = Get<AuthTrackingModel>(AuthKey, httpContext, protectionProvider,
                                   SystemHelper.Setting.EncryptKey.ToString("N")) ?? new AuthTrackingModel();

            authTracking.Users = authTracking.Users.RemoveWhere(x => x.Id == userSignInTracking.Id).ToList();

            authTracking.Users.Add(userSignInTracking);

            authTracking.CurrentUserId = userSignInTracking.Id;

            // Set Cookie

            Set(AuthKey, authTracking, httpContext, protectionProvider,
                SystemHelper.Setting.EncryptKey.ToString("N"));

            return authTracking;
        }

        public static AuthTrackingModel GetAuthTracking(HttpContext httpContext,
            IDataProtectionProvider protectionProvider)
        {
            var authTracking = Get<AuthTrackingModel>(AuthKey, httpContext, protectionProvider,
                                   SystemHelper.Setting.EncryptKey.ToString("N")) ??
                               new AuthTrackingModel();

            return authTracking;
        }

        public static void EmptyAuthTracking(HttpContext httpContext, IDataProtectionProvider protectionProvider)
        {
            Set(AuthKey, new AuthTrackingModel(), httpContext, protectionProvider,
                SystemHelper.Setting.EncryptKey.ToString("N"));
        }
    }
}