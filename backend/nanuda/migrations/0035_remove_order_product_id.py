# Generated by Django 3.2 on 2021-05-20 01:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0034_remove_order_order_upfront_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='product_id',
        ),
    ]