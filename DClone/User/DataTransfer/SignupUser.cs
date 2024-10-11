namespace DClone.User.DataTransfer;

public class SignupUser 
{
    public string UserName { get; set;}
    public string Email { get; set;}
    public string Password { get; set;}
    public DateOnly DateOfBirth { get; set;}
    public bool NewsLetter { get; set;}

    public SignupUser(string userName, string email, string password, bool newsletter)
    {
        UserName = userName;
        Email = email;
        Password = password;
        NewsLetter = newsletter;
    }
}