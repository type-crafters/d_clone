using DClone.Entities;

namespace DClone.Services;

public interface IUserRepository
{
    public Task<List<UserEntity>> GetAllUsersAsync(int? limit, int? offset);
    public Task<UserEntity> GetUserByIdAsync(long id);
    public Task CreateUserAsync(UserEntity user);
    public Task UpdateUserAsync(UserEntity user);
    public Task DeleteUserAsync(long id);
    public Task<bool> CommitAsync();
}

