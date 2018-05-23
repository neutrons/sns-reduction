# Generated by Django 2.0.5 on 2018-05-23 22:06

from django.conf import settings
import django.contrib.postgres.fields.jsonb
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import server.util.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('catalog', '0001_initial'),
        ('django_remote_submission', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('configuration', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ReductionBioSANS',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('script_execution_path', models.CharField(max_length=256)),
                ('script', models.TextField(blank=True, help_text='Python script generated from the reduction entry.         If the script was generated already just shows it!')),
                ('run_type', models.IntegerField(choices=[(1, 'Copy and Execute the script'), (2, 'Copy the script')], default=1, help_text='For auto reduction copy only the script. If you have previledges you can copy the script to the instrument autoreduction directory.')),
                ('instrument', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reductionbiosans_instruments', related_query_name='reductionbiosans_instrument', to='catalog.Instrument')),
                ('job', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reductionbiosans_job', related_query_name='reductionbiosans_job', to='django_remote_submission.Job')),
                ('script_interpreter', models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reductionbiosans_interpreters', related_query_name='reductionbiosans_interpreter', to='django_remote_submission.Interpreter')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reductionbiosans_users', related_query_name='reductionbiosans_user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['id'],
                'abstract': False,
            },
            bases=(models.Model, server.util.models.ModelMixin),
        ),
        migrations.CreateModel(
            name='ReductionGPSANS',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('script_execution_path', models.CharField(max_length=256)),
                ('script', models.TextField(blank=True, help_text='Python script generated from the reduction entry.         If the script was generated already just shows it!')),
                ('run_type', models.IntegerField(choices=[(1, 'Copy and Execute the script'), (2, 'Copy the script')], default=1, help_text='For auto reduction copy only the script. If you have previledges you can copy the script to the instrument autoreduction directory.')),
                ('instrument', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reductiongpsans_instruments', related_query_name='reductiongpsans_instrument', to='catalog.Instrument')),
                ('job', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reductiongpsans_job', related_query_name='reductiongpsans_job', to='django_remote_submission.Job')),
                ('script_interpreter', models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reductiongpsans_interpreters', related_query_name='reductiongpsans_interpreter', to='django_remote_submission.Interpreter')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reductiongpsans_users', related_query_name='reductiongpsans_user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['id'],
                'abstract': False,
            },
            bases=(models.Model, server.util.models.ModelMixin),
        ),
        migrations.CreateModel(
            name='ReductionHYSPEC',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('script_execution_path', models.CharField(max_length=256)),
                ('script', models.TextField(blank=True, help_text='Python script generated from the reduction entry.         If the script was generated already just shows it!')),
                ('run_type', models.IntegerField(choices=[(1, 'Copy and Execute the script'), (2, 'Copy the script')], default=1, help_text='For auto reduction copy only the script. If you have previledges you can copy the script to the instrument autoreduction directory.')),
                ('ub_a', models.DecimalField(blank=True, decimal_places=4, max_digits=8, null=True, verbose_name='a')),
                ('ub_b', models.DecimalField(blank=True, decimal_places=4, max_digits=8, null=True, verbose_name='b')),
                ('ub_c', models.DecimalField(blank=True, decimal_places=4, max_digits=8, null=True, verbose_name='c')),
                ('ub_alpha', models.DecimalField(blank=True, decimal_places=4, max_digits=8, null=True, verbose_name='\\(\t\\alpha \\)')),
                ('ub_beta', models.DecimalField(blank=True, decimal_places=4, max_digits=8, null=True, verbose_name='\\(\t\\beta \\)')),
                ('ub_gamma', models.DecimalField(blank=True, decimal_places=4, max_digits=8, null=True, verbose_name='\\(\t\\gamma \\)')),
                ('ub_u_vector', models.CharField(blank=True, help_text='UB \\( \\it{u} \\) vector: x,y,z. Default: 1,0,0', max_length=12, validators=[django.core.validators.RegexValidator(code='invalid_projection', message='Use: Qx,Qy,Qz', regex='^([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+,([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+,([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+$')], verbose_name='\\( \\vec{u} \\)')),
                ('ub_v_vector', models.CharField(blank=True, help_text='UB \\( \\it{v} \\) vector: x,y,z. Default: 0,1,0', max_length=12, validators=[django.core.validators.RegexValidator(code='invalid_projection', message='Use: Qx,Qy,Qz', regex='^([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+,([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+,([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+$')], verbose_name='\\( \\vec{v} \\)')),
                ('q1_projection', models.CharField(blank=True, help_text='Use the notation: x,y,z', max_length=12, validators=[django.core.validators.RegexValidator(code='invalid_projection', message='Use: Qx,Qy,Qz', regex='^([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+,([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+,([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+$')], verbose_name='Q1 projection')),
                ('q2_projection', models.CharField(blank=True, help_text='Use the notation: x,y,z', max_length=12, validators=[django.core.validators.RegexValidator(code='invalid_projection', message='Use: Qx,Qy,Qz', regex='^([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+,([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+,([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+$')], verbose_name='Q2 projection')),
                ('q3_projection', models.CharField(blank=True, help_text='Use the notation: x,y,z', max_length=12, validators=[django.core.validators.RegexValidator(code='invalid_projection', message='Use: Qx,Qy,Qz', regex='^([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+,([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+,([-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?)+$')], verbose_name='Q3 projection')),
                ('configuration', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='regions', related_query_name='region', to='configuration.ConfigurationHYSPEC')),
                ('instrument', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reductionhyspec_instruments', related_query_name='reductionhyspec_instrument', to='catalog.Instrument')),
                ('job', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reductionhyspec_job', related_query_name='reductionhyspec_job', to='django_remote_submission.Job')),
                ('script_interpreter', models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reductionhyspec_interpreters', related_query_name='reductionhyspec_interpreter', to='django_remote_submission.Interpreter')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reductionhyspec_users', related_query_name='reductionhyspec_user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['id'],
                'abstract': False,
            },
            bases=(models.Model, server.util.models.ModelMixin),
        ),
        migrations.CreateModel(
            name='RegionBioSANS',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('empty_beam_run', models.CharField(blank=True, help_text='Use run number or file path. If empty, uses that of the Configuration.', max_length=128, verbose_name='Empty Beam Transmission')),
                ('beam_center_run', models.CharField(blank=True, help_text='Use run number or file path. If empty, uses that of the Configuration.', max_length=128, verbose_name='Beam Center')),
                ('comments', models.CharField(blank=True, help_text='Any necessary comments...', max_length=256)),
                ('entries', django.contrib.postgres.fields.jsonb.JSONField()),
                ('configuration', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='regions', related_query_name='region', to='configuration.ConfigurationBioSANS')),
                ('reduction', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='regions', related_query_name='region', to='reduction.ReductionBioSANS')),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model, server.util.models.ModelMixin),
        ),
        migrations.CreateModel(
            name='RegionGPSANS',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('empty_beam_run', models.CharField(blank=True, help_text='Use run number or file path. If empty, uses that of the Configuration.', max_length=128, verbose_name='Empty Beam Transmission')),
                ('beam_center_run', models.CharField(blank=True, help_text='Use run number or file path. If empty, uses that of the Configuration.', max_length=128, verbose_name='Beam Center')),
                ('comments', models.CharField(blank=True, help_text='Any necessary comments...', max_length=256)),
                ('entries', django.contrib.postgres.fields.jsonb.JSONField()),
                ('configuration', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='regions', related_query_name='region', to='configuration.ConfigurationGPSANS')),
                ('reduction', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='regions', related_query_name='region', to='reduction.ReductionGPSANS')),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model, server.util.models.ModelMixin),
        ),
        migrations.CreateModel(
            name='RegionHYSPEC',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(help_text='Name of this plot.', max_length=256, verbose_name='Name')),
                ('axis_0', models.CharField(choices=[('Q1', 'Q1'), ('Q2', 'Q2'), ('Q3', 'Q3'), ('DE', 'DeltaE')], max_length=2, verbose_name='X-Axis')),
                ('min_0', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Min')),
                ('max_0', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Max')),
                ('nsteps_0', models.IntegerField(default=200, verbose_name='#Steps')),
                ('axis_1', models.CharField(choices=[('Q1', 'Q1'), ('Q2', 'Q2'), ('Q3', 'Q3'), ('DE', 'DeltaE')], max_length=2, verbose_name='Y-Axis')),
                ('min_1', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Min')),
                ('max_1', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Max')),
                ('nsteps_1', models.IntegerField(default=200, verbose_name='#Steps')),
                ('axis_2', models.CharField(choices=[('Q1', 'Q1'), ('Q2', 'Q2'), ('Q3', 'Q3'), ('DE', 'DeltaE')], max_length=2, verbose_name='Integrated Axis')),
                ('min_2', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Min')),
                ('max_2', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Max')),
                ('axis_3', models.CharField(choices=[('Q1', 'Q1'), ('Q2', 'Q2'), ('Q3', 'Q3'), ('DE', 'DeltaE')], max_length=2, verbose_name='Integrated Axis')),
                ('min_3', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Min')),
                ('max_3', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Max')),
                ('reduction', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='regions', related_query_name='region', to='reduction.ReductionHYSPEC')),
            ],
            options={
                'ordering': ['id'],
                'abstract': False,
            },
            bases=(models.Model, server.util.models.ModelMixin),
        ),
    ]
