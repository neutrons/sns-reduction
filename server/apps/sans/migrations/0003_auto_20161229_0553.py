# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-29 10:53
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sans', '0002_auto_20161228_0818'),
    ]

    operations = [
        migrations.AlterField(
            model_name='biosansreduction',
            name='ipts',
            field=models.CharField(max_length=16),
        ),
        migrations.AlterField(
            model_name='biosansreduction',
            name='title',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='biosansregion',
            name='configuration',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='reductions', related_query_name='reduction', to='sans.BioSANSConfiguration'),
            preserve_default=False,
        ),
    ]
