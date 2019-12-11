using System.Linq;
using FluentValidation;
using EFSoftware.Core.Share.Models.Application;

namespace EFSoftware.Core.Share.Validators.Application
{
    public class CreateApplicationModelValidator : AbstractValidator<CreateApplicationModel>
    {
        public CreateApplicationModelValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .MaximumLength(100);

            RuleFor(x => x.Description)
                .MaximumLength(500);
        }
    }

    public class ApplicationModelValidator : AbstractValidator<ApplicationModel>
    {
        public ApplicationModelValidator()
        {
            Include(new CreateApplicationModelValidator());

            RuleFor(x => x.ListGrantType)
                .Must(x => x?.Any() == true)
                .WithMessage("Grant Types cannot be empty.");

            RuleFor(x => x.JwtExpirationSecond)
                .GreaterThanOrEqualTo(300);
        }
    }
}