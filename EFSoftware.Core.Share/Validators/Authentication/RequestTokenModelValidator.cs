using Kalms.Core.Share.Models.Authentication;
using FluentValidation;
using EFSoftware.Core.Share.Constants;

namespace EFSoftware.Core.Share.Validators.Authentication
{
    public class RequestTokenModelValidator : AbstractValidator<RequestTokenModel>
    {
        public RequestTokenModelValidator()
        {
            RuleFor(x => x.ClientId)
                .NotEmpty();

            // Code and Client Credential

            RuleFor(x => x.ClientSecret)
                .NotEmpty()
                .When(x => x.GrantType == GrantType.AuthorizationCode
                           || x.GrantType == GrantType.ClientCredential);
            
            RuleFor(x => x.CodeVerifier)
                .NotEmpty()
                .When(x => x.GrantType == GrantType.AuthorizationCodePKCE);

            RuleFor(x => x.RedirectUri)
                .NotEmpty()
                .When(x => x.GrantType == GrantType.AuthorizationCode
                           || x.GrantType == GrantType.AuthorizationCodePKCE);

            // Resource Onwer Password
            
            RuleFor(x => x.UserName)
                .NotEmpty()
                .When(x => x.GrantType == GrantType.ResourceOwner);
            
            RuleFor(x => x.Password)
                .NotEmpty()
                .When(x => x.GrantType == GrantType.ResourceOwner);

            // Refresh Token
            RuleFor(x => x.RefreshToken).NotEmpty().When(x => x.GrantType == GrantType.RefreshToken);
        }
    }
}