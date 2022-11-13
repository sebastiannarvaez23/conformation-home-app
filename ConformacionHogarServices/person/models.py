from django.db import models

# Create your models here.
class Person(models.Model):
    id = models.AutoField(primary_key=True, verbose_name="id")
    is_head_household = models.BooleanField(verbose_name="Es cabeza de hogar")
    first_name = models.CharField(max_length=200, verbose_name="Primer Nombre")
    second_name = models.CharField(max_length=200, verbose_name="Segundo Nombre", blank=True, null=True)
    first_last_name = models.CharField(max_length=200, verbose_name="Primer Apellido")
    second_last_name = models.CharField(max_length=200, verbose_name="Segundo Apellido", blank=True, null=True)
    date_birth = models.DateField(verbose_name="Fecha de Nacimiento")
    type_identification = models.CharField(max_length=10, verbose_name="Tipo Identificación")
    num_identification = models.CharField(max_length=200, verbose_name="Número Identificación")