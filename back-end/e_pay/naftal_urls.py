from django.urls import include, path
from e_pay import naftal_views

urlpatterns = [
    path("contract/", naftal_views.contract),
    path("virement/", naftal_views.virement)

]