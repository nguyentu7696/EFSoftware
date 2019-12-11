using FluentValidation;
using EFSoftware.Core.Share.Models.User;

namespace EFSoftware.Core.Share.Validators.User
{
    public class CreateUserModelValidator : AbstractValidator<CreateUserModel>
    {
        public CreateUserModelValidator()
        {
            RuleFor(x => x.Email)
                .NotEmpty()
                .EmailAddress()
                .MaximumLength(500);
        }
    }

    public class UserModelValidator : AbstractValidator<UserModel>
    {
        public UserModelValidator()
        {
            RuleFor(x => x.Email)
                .EmailAddress()
                .MaximumLength(500)
                .When(x => !x.IsApp && !string.IsNullOrWhiteSpace(x.Email));

            RuleFor(x => x.Phone)
                .MaximumLength(20);
            
            RuleFor(x => x.UserName)
                .MaximumLength(200);

            RuleFor(x => x.BannedRemark)
                .NotEmpty()
                .When(x => x.IsBanned)
                .MaximumLength(500);
        }
    }
}