# Generated by Django 3.2 on 2021-06-29 05:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0029_auto_20210629_1340'),
    ]

    operations = [
        migrations.AddField(
            model_name='paymenthistory',
            name='num',
            field=models.CharField(default='', max_length=10),
        ),
    ]