from celery import shared_task
from django.core.mail import send_mail
import os

@shared_task()
def send_registration_email(email_address, username):
    print(f'Sending email to {username}...')

    send_mail(
        subject='Clarity Registration',
        message=f'Welcome to Clarity, {username}!\nThank you for signing up!',
        from_email='itmosha0@gmail.com',
        recipient_list=[email_address],
        fail_silently=False,
    )

    print(f'Email to {username} was delivered!')
