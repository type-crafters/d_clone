using DClone.Services;
using DClone.Entities;

namespace DClone.Repositories;

public class UserPreferencesRepository : IUserPreferencesRepository
{
    public Task EditUserPreferencesAsync(long userId)
    {
        throw new NotImplementedException();
    }

    public Task<UserPreferenceEntity> GetUserPreferencesAsync(long userId)
    {
        throw new NotImplementedException();
    }

    public Task ResetUserPreferencesAsync(long userId)
    {
        throw new NotImplementedException();
    }
}