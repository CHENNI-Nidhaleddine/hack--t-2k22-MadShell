from rest_framework import  permissions
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
import uuid
from django.shortcuts import get_object_or_404
from django.contrib import messages

from e_pay.models import (
	Naftal,
	Station,
	NaftalWorker,
	Company,
	Worker,
	Vehicle,
	Transaction
	)
from e_pay.serializer import (
	NaftalSerializer,
	StationSerializer,
	NaftalWorkerSerializer,
	CompanySerializer,
	WorkerSerializer,
	VehicleSerializer,
	TransactionSerializer
     
	)
'''
@api_view(['GET','POST'])

def all_companies(request):
    if request.method=='GET':
    	allCompanies=Company.objects.all()
    	serialized=CompanySerializer(allCompanies,many=True)
    	return Response(serialized.data)

@api_view(['GET'])
def one_company(request,id_company):
    if request.method=='GET':
    	company=get_object_or_404(Company,id=id_company)
    	return Response(CompanySerializer(company,many=False).data)
'''
@api_view(['POST'])
def contract(request):
    return Response("Contract handleded successfully")

@api_view(['POST'])
def virement(request):
	company=get_object_or_404(Company,id=uuid.UUID(request.data["id_company"]))
	company.credit=company.credit+request.data["virement"]
	company.save()
	return Response("virement handleded successfully")