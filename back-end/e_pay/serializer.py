from rest_framework import serializers
from e_pay.models import (
    Naftal,
    Station,
    NaftalWorker,
    Company,
    Worker,
    Vehicle,
    Transaction
    )

class NaftalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Naftal
        fields = '__all__'

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = '__all__'

class NaftalWorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = NaftalWorker
        fields = '__all__'

class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    Workers = serializers.SerializerMethodField('get_workers')
    Vehicles = serializers.SerializerMethodField('get_vehicle')
    
    def get_workers(self, company):
        return  WorkerSerializer(Worker.objects.filter(id_company=company.id),many=True).data
    
    def get_vehicle(self, company):
        return  VehicleSerializer(Vehicle.objects.filter(id_company=company.id),many=True).data

    class Meta:
        model = Company
        fields = ('id','credit','name','Workers','Vehicles')

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = '__all__'
class TransactionSerializer(serializers.ModelSerializer):
    worker=WorkerSerializer()
    station=StationSerializer()
    

    class Meta:
        model = Transaction
        fields = '__all__'