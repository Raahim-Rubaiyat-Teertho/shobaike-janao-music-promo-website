# Generated by Django 4.2.1 on 2023-11-20 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('audience', '0001_initial'),
        ('artist', '0013_postupvote_voted_by_audiences'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postupvote',
            name='voted_by_artists',
            field=models.ManyToManyField(blank=True, to='artist.artist'),
        ),
        migrations.AlterField(
            model_name='postupvote',
            name='voted_by_audiences',
            field=models.ManyToManyField(blank=True, to='audience.audience'),
        ),
    ]
