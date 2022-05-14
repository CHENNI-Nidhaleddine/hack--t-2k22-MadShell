from django.contrib import admin
from e_pay.models import (
	Naftal,
	Station,
	NaftalWorker,
	Company,
	Worker,
	Vehicle,
	Transaction
	)
# Register your models here.

@admin.register(Naftal)
class NaftalAdmin(admin.ModelAdmin):
    list_display = ("id",)

@admin.register(Station)
class StationAdmin(admin.ModelAdmin):
    list_display = ("id",)

@admin.register(NaftalWorker)
class NaftalWorkerAdmin(admin.ModelAdmin):
    list_display = ("id","name","email")

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ("name",)

@admin.register(Worker)
class WorkerAdmin(admin.ModelAdmin):
    list_display = ("id",)

@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ("id","plate")

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ("id",)
