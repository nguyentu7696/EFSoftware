using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace EFSoftware.Core.Share.Constants
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum CodeChallengeMethod
    {
        /// <summary>
        ///     SHA-256 code challenge method. 
        /// </summary>
        S256,

        /// <summary>
        ///     Plain code challenge method. 
        /// </summary>
        Plain
    }
}