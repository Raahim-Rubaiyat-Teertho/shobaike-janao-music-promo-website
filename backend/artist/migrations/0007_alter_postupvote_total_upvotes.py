# Generated by Django 4.2.1 on 2023-11-19 20:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artist', '0006_rename_postupvotes_postupvote'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postupvote',
            name='total_upvotes',
            field=models.IntegerField(default=1),
        ),
    ]
