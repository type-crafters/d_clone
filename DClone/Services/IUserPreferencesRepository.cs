using DClone.Entities;

namespace DClone.Services;

public interface IUserPreferencesRepository
{
    public Task<UserPreferenceEntity> GetUserPreferencesAsync(long userId);
    public Task EditUserPreferencesAsync(long userId);
    public Task ResetUserPreferencesAsync(long userId); 
}