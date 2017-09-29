# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-29 14:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='instrument',
            name='active',
            field=models.BooleanField(default=False, help_text='Whether the instrument is active and working in the dashboard', verbose_name='instrument is active (i.e, visble in the catalog)'),
        ),
    ]
