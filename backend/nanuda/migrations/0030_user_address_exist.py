# Generated by Django 3.2 on 2021-05-14 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0029_merge_0027_auto_20210513_1718_0028_auto_20210514_1325'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='address_exist',
            field=models.BooleanField(blank=True, default=False),
        ),
    ]
