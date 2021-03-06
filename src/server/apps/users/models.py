from __future__ import unicode_literals

import logging
import re

from django.conf import settings
from django.contrib.auth.models import (AbstractBaseUser, Group,
                                        PermissionsMixin, UserManager)
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.db import IntegrityError
from django.db.models import Q
from django.core.validators import RegexValidator
# from django.db.models.fields import BLANK_CHOICE_DASH

from server.apps.catalog.oncat.facade import Catalog
from server.apps.catalog.models import Facility, Instrument

logger = logging.getLogger(__name__)  # pylint: disable=C0103


class User(AbstractBaseUser, PermissionsMixin):
    '''
    This will overwrite the default user model
    '''
    username = models.CharField(max_length=40, unique=True, db_index=True,)
    email = models.EmailField(max_length=100, unique=False, blank=True)
    fullname = models.CharField(max_length=100, blank=False,
                                verbose_name=_("Full Name"))
    address = models.CharField(max_length=250, blank=False)

    date_joined = models.DateField(auto_now=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def get_full_name(self):
        return self.fullname

    def get_short_name(self):
        return self.username

    def __str__(self):
        return self.username


class UserProfileManager(models.Manager):
    '''
    Queries go here!!
    '''
    use_for_related_fields = True

    def get_queryset(self):
        return super(UserProfileManager, self).get_queryset()


class UserProfile(models.Model):
    '''
    Adds some extra info the User class
    One to One relation
    '''

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="profile",
        related_query_name="profile",
    )

    facility = models.ForeignKey(Facility, on_delete=models.CASCADE)

    instrument = models.ForeignKey(Instrument, on_delete=models.CASCADE)

    ipts = models.CharField(
        "Integrated Proposal Tracking System (IPTS)",
        max_length=20,
        blank=True,
        # choices=BLANK_CHOICE_DASH,
        # validators=[
        #     RegexValidator(
        #         regex='^IPTS-\d+$',
        #         message='IPTS must be of the form: IPTS-XXXX',
        #         code='invalid_ipts'
        #     ),
        # ],
    )

    experiment = models.CharField(
        "Experiment (Only used at HFIR!)",
        max_length=20,
        blank=True,
        # choices=BLANK_CHOICE_DASH,
        # validators=[
        #     RegexValidator(
        #         regex='^exp\d+$',
        #         message='Exp must be of the form: expXXX',
        #         code='invalid_exp'
        #     ),
        # ],
    )

    def __str__(self):
        return self.user.username

    # Manager
    objects = UserProfileManager()

    # Meta
    class Meta:
        verbose_name = _("Profile")


