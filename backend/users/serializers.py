from users.models import AppUser
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    full_name = serializers.SerializerMethodField()

    class Meta:
        model = AppUser
        fields = ["id", "email", "first_name",
                  "last_name", "full_name", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = AppUser.objects.create(**validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user

    def get_full_name(self, obj):
        return obj.get_full_name()
