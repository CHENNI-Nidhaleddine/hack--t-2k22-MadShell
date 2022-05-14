from django.db import models
from uuid import uuid4

class Naftal(models.Model):
    id = models.UUIDField(
        primary_key =  True, default=uuid4, editable=False)

class Station(models.Model):
	id = models.UUIDField(
        primary_key =  True, default=uuid4, editable=False)
	name=models.CharField(max_length=254)
class NaftalWorker(models.Model):
	id = models.UUIDField(
        primary_key = True, default=uuid4, editable=False)
	id_station = models.ForeignKey(
    	to=Station, on_delete=models.CASCADE)
	name=models.CharField(max_length=254)
	email=models.EmailField(max_length=254,unique=True)
	def __str__(self):
		return self.name	
class Company(models.Model):
	id = models.UUIDField(
        primary_key = True, default=uuid4, editable=False)
	name=models.CharField(max_length=254)
	credit = models.FloatField()
	def __str__(self):
		return self.name

class Worker(models.Model):
	id = models.UUIDField(
        primary_key=True, default=uuid4, editable=False)
	id_company =models.ForeignKey(
    	to=Company, on_delete=models.CASCADE)
	name = models.CharField(max_length=254)
	def __str__(self):
		return self.name

class Vehicle(models.Model):
	id = models.UUIDField(
        primary_key=True, default=uuid4, editable=False)
	id_company =models.ForeignKey(
    	to=Company, on_delete=models.CASCADE)
	type = models.CharField(max_length=255)
	plate=models.CharField(max_length=10,unique=True)
	def __str__(self):
		return self.plate

class Transaction(models.Model):
	id = models.UUIDField(
        primary_key=True, default=uuid4, editable=False)
	company = models.ForeignKey(
		to=Company,on_delete=models.CASCADE 
		)
	worker = models.ForeignKey(
		to=Worker,on_delete=models.CASCADE 
		)
	naftal_worker=models.ForeignKey(
		to=NaftalWorker,on_delete=models.CASCADE 
		)
	station = models.ForeignKey(
		to=Station,on_delete=models.CASCADE 
		)
	amount=models.FloatField()
	time=models.DateTimeField()