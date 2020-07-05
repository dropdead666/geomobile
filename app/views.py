from django.shortcuts import render
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.contrib.auth import logout
from .forms import RegisterForm


def main(request):
    if request.user.is_authenticated:
        return render(request, 'index.html', {})
    else:
        return redirect('login')


def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        username = request.POST['username']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        email = request.POST['email']

        context = {'form': form,
                    'username': username,
                    'password1': password1,
                    'password2': password2,
                    'email': email}

        if form.is_valid():
            form.save()
            return redirect('/')

    else:
            form = RegisterForm()
            context = {'form': form}
    return render(request, 'registration/register.html', context)


def logout_view(request):
    logout(request)
    return redirect('login')