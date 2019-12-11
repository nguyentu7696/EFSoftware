using EFSoftware.Core.Models;
using FluentValidation;

namespace EFSoftware.Core.Validators
{
    public class ElectPagedRequestModelValidator : AbstractValidator<Elect.Web.Api.Models.PagedRequestModel>
    {
        public ElectPagedRequestModelValidator()
        {
            RuleFor(x => x.Skip)
                .GreaterThanOrEqualTo(0);

            RuleFor(x => x.Take)
                .GreaterThan(0);
        }
    }

    public class PagedRequestModelValidator : AbstractValidator<PagedRequestModel>
    {
        public PagedRequestModelValidator()
        {
            Include(new ElectPagedRequestModelValidator());
        }
    }
}