# Generated by Django 4.2.1 on 2023-11-19 20:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artist', '0009_alter_postupvote_total_upvotes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postupvote',
            name='total_upvotes',
            field=models.IntegerField(default=0),
        ),
    ]
