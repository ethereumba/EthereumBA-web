from django.shortcuts import render
from django.template import RequestContext


def handler403(request, reason=""):
    response = render(request, '403.html')
    response.status_code = 403
    return response


def handler404(request):
    response = render(request, '404.html')
    response.status_code = 404
    return response


def handler500(request):
    response = render(request, '500.html')
    response.status_code = 500
    return response
