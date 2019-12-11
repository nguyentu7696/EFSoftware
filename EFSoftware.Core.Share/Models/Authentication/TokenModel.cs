namespace EFSoftware.Core.Share.Models.Authentication
{
    public class TokenModel
    {
        public string TokenType { get; set; } = "Bearer";

        public long ExpireIn { get; set; }

        public string RefreshToken { get; set; }

        public string AccessToken { get; set; }

        public string State { get; set; }
    }
}