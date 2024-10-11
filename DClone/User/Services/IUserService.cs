using DClone.User.Entities;

public interface IUserService
{
    public Task<IEnumerable<User>> GetAllUsersAsync();
    public Task<User> GetUserByIdAsync(long id);
    Task AddUserAsync(User user);
    Task UpdateUserAsync(User user);
    Task DeleteUserAsync(long id);
}