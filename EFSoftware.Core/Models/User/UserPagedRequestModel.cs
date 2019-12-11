using EFSoftware.Core.Share.Constants;

namespace EFSoftware.Core.Models.User
{
    public class UserPagedRequestModel : PagedRequestModel
    {
        public UserPagedRequestModel()
        {
            Skip = 0;

            Take = 10;
        }

        public string Email { get; set; }

        public string Phone { get; set; }
        
        public string LastName { get; set; }
        
        public string FirstName { get; set; }
        
        public bool IsIncludeApp { get; set; }

        public Permission? Permission { get; set; }
    }
}