from django.urls import include, path

urlpatterns = [
    path("naftal/", include('e_pay.naftal_urls')),
    path("companies/", include('e_pay.companies_urls')),
    
]