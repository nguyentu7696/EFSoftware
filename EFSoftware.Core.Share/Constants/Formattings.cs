using System.Globalization;
using Newtonsoft.Json;

namespace EFSoftware.Core.Share.Constants
{
    public static class Formattings
    {
        /// <summary>
        ///     Config use datetime with TimeZone. Default is "UTC", See more: https://msdn.microsoft.com/en-us/library/gg154758.aspx 
        /// </summary>
        public const string TimeZone = "SE Asia Standard Time"; // "UTC"

        public const string DateFormat = "dd/MM/yyyy";

        public const string TimeFormat  = "h:mm:ss tt";

        public const string DateTimeFormat  = "dd/MM/yyyy hh:mm:ss tt";
        
        public const string JsDateFormat = "dd/mm/yyyy";

        public const string JsDateTimeFormat  = "dd/mm/yyyy HH:ii:ss P";
        
        public static readonly JsonSerializerSettings JsonSerializerSettings = new JsonSerializerSettings
        {
            Formatting = Elect.Core.Constants.Formatting.JsonSerializerSettings.Formatting,
            NullValueHandling = Elect.Core.Constants.Formatting.JsonSerializerSettings.NullValueHandling,
            MissingMemberHandling = Elect.Core.Constants.Formatting.JsonSerializerSettings.MissingMemberHandling,
            DateFormatHandling = Elect.Core.Constants.Formatting.JsonSerializerSettings.DateFormatHandling,
            ReferenceLoopHandling = Elect.Core.Constants.Formatting.JsonSerializerSettings.ReferenceLoopHandling,
            ContractResolver = Elect.Core.Constants.Formatting.JsonSerializerSettings.ContractResolver,
            DateFormatString = Elect.Core.Constants.Formatting.JsonSerializerSettings.DateFormatString,
            Culture = CultureInfo.CurrentCulture,
        };
    }
}