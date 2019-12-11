using EFSoftware.Core.Models.Authentication;
using FluentValidation;

namespace EFSoftware.Core.Validators.Authentication
{
    public class RegisterModelValidator : AbstractValidator<RegisterModel>
    {
        public RegisterModelValidator()
        {
            RuleFor(x => x.Phone)
                .NotEmpty()
                .Length(10, 20)
                .WithMessage("Phone must between 10 and 20 characters");
            
            RuleFor(x => x.Password)
                .NotEmpty()
                .Length(6, 100)
                .WithMessage("Password must between 6 and 100 characters");
        }
    }
}