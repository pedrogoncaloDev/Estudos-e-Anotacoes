from django.http import HttpResponse

def teste(request):
    return HttpResponse('Teste')

def index_view(request):
	return HttpResponse('<h1>Bem vindo ao Django!</h1>')