# myapp/models.py
from django.db import models

class EPLResult(models.Model):
    date = models.DateField()
    home_team = models.CharField(max_length=100)
    away_team = models.CharField(max_length=100)
    home_score = models.IntegerField()
    away_score = models.IntegerField()

    def __str__(self):
        return f"{self.date} - {self.home_team} {self.home_score} - {self.away_team} {self.away_score}"
