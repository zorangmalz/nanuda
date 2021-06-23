# Generated by Django 3.1.4 on 2021-06-23 06:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0002_auto_20210621_1449'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.IntegerField(blank=True, choices=[(1, '남성'), (0, '여성')], default=''),
        ),
        migrations.CreateModel(
            name='MissionList',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('mission_type', models.CharField(default='', max_length=50)),
                ('mission_images', models.JSONField(blank=True, default=list)),
                ('mission_options', models.JSONField(blank=True, default=dict)),
                ('user_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='nanuda.user')),
            ],
            options={
                'managed': True,
            },
        ),
    ]
