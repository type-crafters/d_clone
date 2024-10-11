using System.ComponentModel.DataAnnotations;

namespace DClone.User.DataTransfer;

public class SignupUser 
{
    [Required(ErrorMessage = "Username is required")]
    [StringLength(31, MinimumLength = 6, ErrorMessage = "Username must be between 6 and 31 characters in length.")]
    [RegularExpression(@"^[A-Za-z0-9_][A-Za-z0-9_.-]{5,30}$", ErrorMessage="Username must start with a letter, number or underscore, and may include letters, numbers, underscores, hyphens and periods.")]
    public required string UserName { get; set;}

    [Required(ErrorMessage = "Email is required")]
    public required string Email { get; set;}

    [Required(ErrorMessage = "Password is required")]
    public required string Password { get; set;}

    [Required(ErrorMessage = "Date of birth cannot be empty")]
    public DateOnly DateOfBirth { get; set;}
    public bool NewsLetter { get; set;}
}