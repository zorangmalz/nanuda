# Generated by Django 3.1.4 on 2021-06-28 01:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0013_auto_20210625_1716'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='review_alert',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='review',
            name='review_dislikeNum',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='review',
            name='review_likeNum',
            field=models.JSONField(),
        ),
    ]
