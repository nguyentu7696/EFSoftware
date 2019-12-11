namespace EFSoftware.Core.Constants
{
    public class LandingEndpoint
    {
        public const string AreaName = "";

        public static class Home
        {
            private const string BaseEndpoint = "~/" + AreaName;

            public const string IndexEndpoint = BaseEndpoint;

            public const string OopsEndpoint = BaseEndpoint + "/oops";

            public const string OopsWithParamEndpoint = OopsEndpoint + "/{statusCode}";
        }
    }
}