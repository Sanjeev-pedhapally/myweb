# myapp/urls.py
from django.urls import path
from .views import EPLResultListCreate, EPLResultDetail

urlpatterns = [
    path('api/eplresults/', EPLResultListCreate.as_view(), name='eplresult-list-create'),
    path('api/eplresults/<int:pk>/', EPLResultDetail.as_view(), name='eplresult-detail'),
]
