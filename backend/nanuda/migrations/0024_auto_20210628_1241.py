# Generated by Django 3.1.4 on 2021-06-28 03:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0023_auto_20210628_1237'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='wish_des',
            field=models.CharField(blank=True, default='', max_length=1000),
        ),
        migrations.AlterField(
            model_name='order',
            name='wish_image',
            field=models.CharField(blank=True, default='', max_length=1000),
        ),
        migrations.AlterField(
            model_name='order',
            name='wish_title',
            field=models.CharField(blank=True, default='', max_length=1000),
        ),
    ]
