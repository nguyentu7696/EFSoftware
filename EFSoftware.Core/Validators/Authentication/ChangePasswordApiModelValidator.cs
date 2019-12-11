using EFSoftware.Core.Models.Authentication;
using FluentValidation;

namespace EFSoftware.Core.Validators.Authentication
{
    public class ChangePasswordApiModelValidator : AbstractValidator<ChangePasswordApiModel>
    {
        public ChangePasswordApiModelValidator()
        {
            RuleFor(x => x.CurrentPassword)
                .NotEmpty()
                .Length(6, 100)
                .WithMessage("Password must between 6 and 100 characters");

            RuleFor(x => x.NewPassword)
                .NotEmpty()
                .Length(6, 100)
                .WithMessage("Password must between 6 and 100 characters");
        }
    }
}