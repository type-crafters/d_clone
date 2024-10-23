using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
using DotNetEnv;

namespace DClone.Data;

public class AppDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);

        Env.Load();

        MySqlConnectionStringBuilder connectionStringBuilder = new() {
            Server = Env.GetString("MYSQL_HOST"),
            Database = Env.GetString("MYSQL_DATABASE"),
            UserID = Env.GetString("MYSQL_USER"),
            Password = Env.GetString("MYSQL_PASSWORD"),
            Port = uint.Parse(Env.GetString("MYSQL_PORT"))
        };

        optionsBuilder.UseMySQL(connectionStringBuilder.ConnectionString);

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}