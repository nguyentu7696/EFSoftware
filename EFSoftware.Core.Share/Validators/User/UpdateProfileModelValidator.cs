using FluentValidation;
using EFSoftware.Core.Share.Models.User;

namespace EFSoftware.Core.Share.Validators.User
{
    public class UpdateProfileModelValidator : AbstractValidator<UpdateProfileModel>
    {
        public UpdateProfileModelValidator()
        {
            RuleFor(x => x.Email)
                .EmailAddress()
                .MaximumLength(500)
                .When(x => !string.IsNullOrWhiteSpace(x.Email));

            RuleFor(x => x.FirstName)
//                .NotEmpty()
                .MaximumLength(500);

            RuleFor(x => x.LastName)
//                .NotEmpty()
                .MaximumLength(500);
        }
    }
}