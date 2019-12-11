using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSLocationViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public Status Status { get; set; }

        public int ZoneLocationId { get; set; }
    }

    public class TMSLocationCreateViewModel
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Status is required")]
        public Status Status { get; set; }

        public int ZoneLocationId { get; set; }
    }

    public class TMSLocationGetIdViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Status { get; set; }

        public int ZoneLocationId { get; set; }
    }
}
