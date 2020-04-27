from django.shortcuts import render

def index(request):
    # template配下にある
    return render(request, 'bamboo/index.html')
