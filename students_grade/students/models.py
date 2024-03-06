from django.db import models
from django.core.exceptions import ValidationError


class Theme(models.Model):

    name = models.CharField(max_length=255)

    def calculate_average_grade(self):
        grades = Grade.objects.filter(theme=self)

        if grades.exists():
            average_grade = grades.aggregate(average=models.Avg('value'))['average']
            return round(average_grade, 2)
        else:
            return None

    def __str__(self) -> str:
        return self.name

class Grade(models.Model):

    value = models.FloatField()
    theme = models.ForeignKey(Theme, related_name="grades", on_delete=models.CASCADE)

    def save(self,  *args, **kwargs) -> None:
        num_grades = Grade.objects.filter(theme=self.theme).count()
        if num_grades < 4:
            return super().save(*args, **kwargs)
        else:
            raise ValidationError("You cannot create more than 4 grades.")


    def __str__(self) -> str:
        return f"{self.theme}-{self.value}"
