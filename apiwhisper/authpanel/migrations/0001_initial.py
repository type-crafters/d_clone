# Generated by Django 5.0.7 on 2024-07-28 04:50

import django.contrib.auth.models
import django.core.validators
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('username', models.CharField(max_length=64, unique=True)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('verified', models.BooleanField(default=False)),
                ('password', models.TextField(max_length=32, validators=[django.core.validators.MinLengthValidator(8)])),
                ('birthdate', models.DateField()),
                ('newsletter', models.BooleanField(default=False)),
                ('creation_date', models.DateTimeField(auto_now_add=True)),
                ('online_status', models.SmallIntegerField(choices=[(0, 'Offline'), (1, 'Online'), (2, 'Idle'), (3, 'Do Not Disturb'), (4, 'Invisible')])),
                ('account_status', models.SmallIntegerField(choices=[(0, 'Inactive'), (1, 'Active'), (2, 'Deleted'), (3, 'Suspended')])),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.AddConstraint(
            model_name='user',
            constraint=models.CheckConstraint(check=models.Q(('online_status__gte', 0), ('online_status__lte', 4)), name='check_online_status'),
        ),
        migrations.AddConstraint(
            model_name='user',
            constraint=models.CheckConstraint(check=models.Q(('account_status__gte', 0), ('account_status__lte', 3)), name='check_account_status'),
        ),
    ]