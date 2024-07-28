from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinLengthValidator

# Create your models here.
class User(AbstractUser):
    ONLINE_STATUS_CHOICES = [
        (0, 'Offline'),
        (1, 'Online'),
        (2, 'Idle'),
        (3, 'Do Not Disturb'),
        (4, 'Invisible')
    ]
    
    ACCOUNT_STATUS_CHOICES = [
        (0, 'Inactive'),
        (1, 'Active'),
        (2, 'Deleted'),
        (3, 'Suspended')
    ]
    
    # ACTIVITY_TYPE_CHOICES = [
    #     (0, 'Go Online'),
    #     (1, 'Go Offline')
    # ]

    username = models.CharField(max_length=64, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    verified = models.BooleanField(default=False)
    password = models.TextField(validators=[MinLengthValidator(8)], max_length=32)                     
    birthdate = models.DateField(null=True)
    newsletter = models.BooleanField(default=False)
    creation_date = models.DateTimeField(auto_now_add=True)
    online_status = models.SmallIntegerField(choices=ONLINE_STATUS_CHOICES, default=0)
    account_status = models.SmallIntegerField(choices=ACCOUNT_STATUS_CHOICES, default=0)
    #activity_type = models.SmallIntegerField(choices=ACTIVITY_TYPE_CHOICES)

    class Meta:
        constraints = [
            models.CheckConstraint(check=models.Q(online_status__gte=0, online_status__lte=4), name='check_online_status'),
            models.CheckConstraint(check=models.Q(account_status__gte=0, account_status__lte=3), name='check_account_status'),
            #models.CheckConstraint(check=models.Q(activity_type__gte=0, activity_type__lte=1), name='check_activity_type'),
        ]

    def __str__(self):
        return f'User: {self.username}'
