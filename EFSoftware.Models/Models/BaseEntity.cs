using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using EFSoftware.Models.Interfaces;

namespace EFSoftware.Models
{
    public class BaseEntity : IBaseEntity
    {

        BaseEntity()
        {
            Id = Guid.NewGuid().ToString("N");
        }
        public string Id { get; set; }

        //public bool IsTrantSient()
        //{
        //    return Id.Equals(default(T));
        //}

        [MaxLength(256)]
        public string CreatedBy { get; set; }
        [MaxLength(256)]
        public string UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
