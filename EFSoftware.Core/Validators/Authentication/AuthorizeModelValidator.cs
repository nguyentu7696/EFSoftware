using EFSoftware.Core.Models.Authentication;
using FluentValidation;
using EFSoftware.Core.Share.Constants;

namespace EFSoftware.Core.Validators.Authentication
{
    public class AuthorizeModelValidator : AbstractValidator<AuthorizeModel>
    {
        public AuthorizeModelValidator()
        {
            RuleFor(x => x.Continue).NotEmpty().When(x => x.GrantType == GrantType.AuthorizationCodePKCE || x.GrantType == GrantType.AuthorizationCode || x.GrantType == GrantType.Implicit);

            RuleFor(x => x.CodeChallenge).NotEmpty().When(x => x.GrantType == GrantType.AuthorizationCodePKCE);

            RuleFor(x => x.UserName).NotEmpty().MaximumLength(200);

            RuleFor(x => x.Password)
                .NotEmpty()
                .Length(6, 100)
                .WithMessage("Password must between 6 and 100 characters");
        }
    }
}