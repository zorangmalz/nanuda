# Generated by Django 3.1.4 on 2021-06-30 01:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('nanuda', '0032_alter_paymenthistory_money'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='wish_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='nanuda.wishdeal'),
        ),
    ]
