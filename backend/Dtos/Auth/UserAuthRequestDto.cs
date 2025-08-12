﻿using System.ComponentModel.DataAnnotations;

namespace backend.Dtos.Auth
{
    public class UserAuthRequestDto
    {
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
    }
}
