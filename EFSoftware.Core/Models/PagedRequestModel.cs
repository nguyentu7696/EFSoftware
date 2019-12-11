namespace EFSoftware.Core.Models
{
    public class PagedRequestModel : Elect.Web.Api.Models.PagedRequestModel
    {
        public PagedRequestModel()
        {
            Skip = 0;

            Take = 10;
        }
    }
}