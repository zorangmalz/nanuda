# Generated by Django 3.2 on 2021-05-20 01:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0033_auto_20210518_1811'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='order_upfront_date',
        ),
    ]
