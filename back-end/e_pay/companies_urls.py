from django.urls import include, path
from e_pay import companies_views

urlpatterns = [
    path("", companies_views.all_companies),
    path("<uuid:id_company>/", companies_views.one_company),
    path("<uuid:id_company>/transactions/", companies_views.transactions),
]