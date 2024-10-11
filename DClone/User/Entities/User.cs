namespace DClone.User.Entities;

public class User
{
    public long Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string UserName { get; set; }
    public string DisplayName { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public string PasswordSalt { get; set; }
    public DateOnly BirthDate { get; set; }
    public bool NewsLetter { get; set; }
    public bool IsEmailConfirmed { get; set; }
    public DateOnly CreationDate { get; set; }   
}