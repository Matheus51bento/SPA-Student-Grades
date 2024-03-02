from django.db import models

class Student(models.Model):

    name = models.CharField(max_length=255)
    course = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name

class Theme(models.Model):

    name = models.CharField(max_length=255)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)

    def calculate_average_grade(self):
        grades = Grade.objects.filter(theme=self)

        if grades.exists():
            average_grade = grades.aggregate(average=models.Avg('value'))['average']
            return average_grade
        else:
            return None

    def __str__(self) -> str:
        return self.name

class Grade(models.Model):

    value = models.FloatField()
    theme = models.ForeignKey(Theme, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.theme}-{self.value}"
