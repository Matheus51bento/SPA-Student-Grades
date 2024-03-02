from students_grade.students.models import Student, Grade, Theme
from rest_framework import serializers

class StudentSerializer(serializers.ModelSerializer[Student]):

    class Meta:
        model = Student
        fields = ["name", "course"]

class ThemeSerializer(serializers.ModelSerializer[Theme]):

    student = StudentSerializer()

    class Meta:
        model = Theme
        fields = ["student", "name"]

class GradeSerializer(serializers.HyperlinkedModelSerializer[Grade]):

    theme = ThemeSerializer()

    class Meta:
        model = Grade
        fields = ["value", "theme"]

