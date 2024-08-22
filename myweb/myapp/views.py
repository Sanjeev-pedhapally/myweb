# myapp/views.py
from rest_framework import generics
from .models import EPLResult
from .serializers import EPLResultSerializer

# List and create EPL results
class EPLResultListCreate(generics.ListCreateAPIView):
    queryset = EPLResult.objects.all()
    serializer_class = EPLResultSerializer

# Retrieve, update, or delete a specific EPL result by ID
class EPLResultDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = EPLResult.objects.all()
    serializer_class = EPLResultSerializer
