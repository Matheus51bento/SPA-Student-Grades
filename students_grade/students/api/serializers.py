from students_grade.students.models import Grade, Theme
from rest_framework import serializers


class GradeSerializer(serializers.ModelSerializer[Grade]):

    class Meta:
        model = Grade
        fields = ["id", "value", "theme"]

class ThemeSerializer(serializers.HyperlinkedModelSerializer[Theme]):

    average_grade = serializers.SerializerMethodField()
    grades = GradeSerializer(many=True, read_only=True)

    class Meta:
        model = Theme
        fields = ["id", "student", "name", "grades", "average_grade"]

    def get_average_grade(self, obj):
        return obj.calculate_average_grade()

