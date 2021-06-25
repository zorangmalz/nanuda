# Generated by Django 3.1.4 on 2021-06-25 07:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0011_order_order_pay'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='review_alert',
            field=models.JSONField(blank=True, default=dict),
        ),
        migrations.AlterField(
            model_name='review',
            name='review_dislikeNum',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='review',
            name='review_likeNum',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
    ]