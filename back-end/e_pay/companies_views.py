from rest_framework import  permissions
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
import uuid
from django.shortcuts import get_object_or_404
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime

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



@api_view(['GET','POST'])
@csrf_exempt
def transactions(request,id_company):
    if request.method=='GET':
    	transactions=Transaction.objects.filter(company=id_company)
    	return Response(TransactionSerializer(transactions,many=True).data)
    if request.method=='POST':
    	company=get_object_or_404(Company,id=id_company)
    	if company.credit>request.data["montant"]:
    		company.credit=company.credit-request.data["montant"]
    		company.save()
    		Transaction.objects.create(company=company,worker=Worker.objects.get(id=uuid.UUID(request.data["id_worker"])),naftal_worker=NaftalWorker.objects.get(id=uuid.UUID(request.data["id_naftal_worker"])),station=NaftalWorker.objects.get(id=uuid.UUID(request.data["id_naftal_worker"])).id_station,amount=request.data["montant"],time=datetime.now())
    		return Response('Transaction effectuée avec success.')
    	else:
    		return Response('Transaction echouée. Pas assez de credit')
    	