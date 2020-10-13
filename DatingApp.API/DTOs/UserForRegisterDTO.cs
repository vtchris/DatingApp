using System;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForRegisterDTO
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(12, MinimumLength=6, ErrorMessage="You must specify a password between 6 and 12 characters")]
        public string Password { get; set; }
        [Required]        
        public string Gender { get; set; }
        [Required]
        public string KnownAs { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public UserForRegisterDTO()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}