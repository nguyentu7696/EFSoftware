using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class CompanyBasicInfoViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "EmailAddress is required")]
        public string EmailAddress { get; set; }

        [Required(ErrorMessage = "Address is required")]
        public string Address { get; set; }

        [Required(ErrorMessage = "PICHandphone is required")]
        public string PICHandphone { get; set; }

        public int Status { get; set; }
        public string Logo { get; set; }

        public string Department { get; set; }

        public string Site { get; set; }
        public string JobSite { get; set; }
        public string Zone { get; set; }
        public string Level { get; set; }
        public string Area { get; set; }
        public string Location { get; set; }
        public int TotalEmployee { get; set; }
    }
}
