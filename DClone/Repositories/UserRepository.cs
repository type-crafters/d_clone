using DClone.Entities;
using DClone.Services;
using Microsoft.EntityFrameworkCore;

namespace DClone.Repositories;

public class UserRepository : IUserRepository
{
    private DbContext db;

    public UserRepository(DbContext db)
    {
        this.db = db;
    }

    public Task<bool> CommitAsync()
    {
        throw new NotImplementedException();
    }

    public Task CreateUserAsync(UserEntity user)
    {
        throw new NotImplementedException();
    }

    public Task DeleteUserAsync(long id)
    {
        throw new NotImplementedException();
    }

    public Task<List<UserEntity>> GetAllUsersAsync(int? limit, int? offset)
    {
        throw new NotImplementedException();
    }

    public Task<UserEntity> GetUserByIdAsync(long id)
    {
        throw new NotImplementedException();
    }

    public Task UpdateUserAsync(UserEntity user)
    {
        throw new NotImplementedException();
    }
}