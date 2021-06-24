# Generated by Django 3.1.4 on 2021-06-24 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0004_auto_20210624_1404'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='address',
            options={'managed': True, 'ordering': ['id', 'user_id', 'address_created_time']},
        ),
        migrations.AddField(
            model_name='address',
            name='address_created_time',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='address',
            name='temp_claim',
            field=models.CharField(blank=True, default='', max_length=300),
        ),
        migrations.AddField(
            model_name='address',
            name='temp_phone_number',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='address',
            name='temp_receiver',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='user',
            name='phone_company',
            field=models.CharField(blank=True, default='', max_length=30),
        ),
        migrations.AlterField(
            model_name='user',
            name='phone_number',
            field=models.CharField(default='', max_length=30),
        ),
    ]