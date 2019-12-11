using System;
using System.Reflection;
using EFSoftware.Core.Share.Utils;

namespace EFSoftware.Core.Models
{
    public class SystemSettingModel
    {
        public static SystemSettingModel Instance { get; set; }

        public DateTimeOffset Runtime { get; set; } = CoreHelper.SystemTimeNow;

        public string ApplicationName { get; set; } = Assembly.GetEntryAssembly().GetName().Name;

        public Guid EncryptKey { get; set; }

        public int AuthorizeCodeStorageSeconds { get; set; } = 600;

        public string Domain { get; set; }

        public int OTPExpireInMinutes { get; set; } = 5;

        public string BrandName { get; set; }

        public bool IsEnableSendSms { get; set; } = false;
        
        // Contact US Info

        public string ContactUsTel { get; set; }
        public string ContactUsEmail { get; set; }
        
        public string ContactUsAddress { get; set; }
        
        public double ContactUsLaitude { get; set; }
        
        public double ContactUsLongitude { get; set; }
    }
}