using EFSoftware.Core.Models.Authentication;
using FluentValidation;

namespace EFSoftware.Core.Validators.Authentication
{
    public class SignInByFacebookModelValidator : AbstractValidator<SignInByFacebookModel>
    {
        public SignInByFacebookModelValidator()
        {
            RuleFor(x => x.ClientId).NotEmpty();
            
            RuleFor(x => x.ClientSecret).NotEmpty();
            
            RuleFor(x => x.FacebookId).NotEmpty();
        }
    }
}