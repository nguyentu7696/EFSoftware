using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSAreaViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Value { get; set; }

        public int ZoneLocationId { get; set; }
    }

    public class TMSAreaCreateViewModel
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Value is required")]
        public string Value { get; set; }

        public int ZoneLocationId { get; set; }
    }
}
