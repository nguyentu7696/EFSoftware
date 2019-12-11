using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using EFSoftware.Core.Share.Constants;

namespace EFSoftware.Core.Share.Utils
{
    public class CookieHelper
    {
        public static void Set<T>(string key, T data, HttpContext httpContext,
            IDataProtectionProvider protectionProvider, string encryptKey)
        {
            var protector = GetDataProtector(protectionProvider, encryptKey);

            var dataJson = JsonConvert.SerializeObject(data, Formattings.JsonSerializerSettings);

            var protectedDataJson = protector.Protect(dataJson);

            httpContext.Response.Cookies.Append(key, protectedDataJson, new CookieOptions
            {
                Expires = null,
                HttpOnly = true,
                Secure = false,
            });
        }

        public static T Get<T>(string key, HttpContext httpContext, IDataProtectionProvider protectionProvider, string encryptKey)
        {
            var protector = GetDataProtector(protectionProvider, encryptKey);

            if (!httpContext.Request.Cookies.TryGetValue(key, out var protectedDataJson))
            {
                return default;
            }

            try
            {
                var dataJson = protector.Unprotect(protectedDataJson);
                
                var data = JsonConvert.DeserializeObject<T>(dataJson, Formattings.JsonSerializerSettings);

                return data;
            }
            catch
            {
                return default;
            }
        }
        
        private static IDataProtector GetDataProtector(IDataProtectionProvider protectionProvider, string encryptKey)
        {
            return protectionProvider.CreateProtector(encryptKey);
        }
    }
}