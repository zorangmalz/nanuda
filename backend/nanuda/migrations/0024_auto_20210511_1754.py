# Generated by Django 3.1.4 on 2021-05-11 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0023_auto_20210511_1752'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='id',
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]