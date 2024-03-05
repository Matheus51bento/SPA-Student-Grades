from django.shortcuts import render
from rest_framework import viewsets, generics
from students_grade.students.api.serializers import ThemeSerializer, GradeSerializer
from students_grade.students.models import Grade, Theme


class ThemeViewSet(viewsets.ModelViewSet):
    serializer_class = ThemeSerializer
    queryset = Theme.objects.all()
    authentication_classes = []
    permission_classes = []

class GradeViewSet(viewsets.ModelViewSet):
    serializer_class = GradeSerializer
    queryset = Grade.objects.all()
    authentication_classes = []
    permission_classes = []
