# Generated by Django 3.1.4 on 2021-05-13 04:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0024_auto_20210511_1754'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='review_image',
            field=models.TextField(),
        ),
    ]
