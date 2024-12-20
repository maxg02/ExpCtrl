from rest_framework import serializers
from incomes.models import Income


class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        exclude = ["user"]
