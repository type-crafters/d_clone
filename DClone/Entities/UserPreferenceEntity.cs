namespace DClone.Entities;

public class UserPreferenceEntity 
{
    public long UserId { get; set; }
    public string? DefaultDisplayName { get; set; }
    public string? PhoneNumber { get; set; }
    public string BannerColor = "6B7280";
    public string? Bio;
}