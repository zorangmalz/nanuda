# Generated by Django 3.1.4 on 2021-05-06 04:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0015_user_job'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicereview',
            name='service_opinion',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]
