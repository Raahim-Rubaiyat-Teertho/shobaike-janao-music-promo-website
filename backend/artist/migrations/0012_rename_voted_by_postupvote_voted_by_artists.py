# Generated by Django 4.2.1 on 2023-11-19 20:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('artist', '0011_remove_postupvote_total_upvotes'),
    ]

    operations = [
        migrations.RenameField(
            model_name='postupvote',
            old_name='voted_by',
            new_name='voted_by_artists',
        ),
    ]
