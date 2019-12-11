using EFSoftware.Core.Models.Authentication;
using FluentValidation;

namespace EFSoftware.Core.Validators.Authentication
{
    public class VerifyPhoneModelValidator : AbstractValidator<VerifyPhoneModel>
    {
        public VerifyPhoneModelValidator()
        {
            RuleFor(x => x.Phone)
                .NotEmpty()
                .Length(10, 20)
                .WithMessage("Phone must between 10 and 20 characters");
            
            RuleFor(x => x.OTP)
                .NotEmpty()
                .Length(4)
                .WithMessage("OTP must be 4 characters");
        }
    }
}