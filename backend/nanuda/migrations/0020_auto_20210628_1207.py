# Generated by Django 3.1.4 on 2021-06-28 03:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0019_auto_20210628_1207'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='review_alert',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='review',
            name='review_likeNum',
            field=models.JSONField(),
        ),
    ]
