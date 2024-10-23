namespace DClone.Models;

public class UserSignupModel 
{
    public required string UserName { get; set; }
    public required string Email { get; set; }
    public required string Password { get; set; }
    public required string RepeatPassword { get; set; }
    public bool NewsletterOptIn { get; set; }
}