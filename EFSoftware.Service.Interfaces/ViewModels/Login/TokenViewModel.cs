using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels.Login
{
    public class TokenViewModel
    {
        public Roles Role { get; set; }
        public string UserId { get; set; }
        public string Token { get; set; }
    }
}
