using DClone.Entities;

namespace DClone.Services;

public interface IUserRepository
{
    public Task<List<UserEntity>> GetAll();
    public Task<UserEntity> GetById(long id);
    public Task Create(UserEntity user);
}