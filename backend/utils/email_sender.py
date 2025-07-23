import os
from dotenv import load_dotenv
import smtplib
from email.message import EmailMessage

load_dotenv()

def send_email(data, type='enquiry'):
    sender_email = os.getenv("EMAIL_ADDRESS")
    sender_password = os.getenv("EMAIL_PASSWORD")
    doctor_email = "mrunalbhosale260407@gmail.com"

    doctor_msg = EmailMessage()
    doctor_msg['Subject'] = f"New {type.capitalize()} Received"
    doctor_msg['From'] = sender_email
    doctor_msg['To'] = doctor_email

    if type == 'enquiry':
        content = f"""New Enquiry:

Name: {data['name']}
Email: {data['email']}
Phone: {data['phone']}
Message: {data['message']}
"""
    else:
        content = f"""New Booking Request:

Name: {data['name']}
Email: {data['email']}
Phone: {data['phone']}
Address: {data['address']}
Location: {data.get('location','')}
Issue: {data.get('issue','')}
Treatment: {data.get('treatment','')}
Date: {data['date']}
Time: {data['time']}
"""
    doctor_msg.set_content(content)

    user_msg = EmailMessage()
    user_msg['Subject'] = f"Thanks for your {type} submission!"
    user_msg['From'] = sender_email
    user_msg['To'] = data['email']
    user_msg.set_content(f"""Hi {data['name']},

Thanks for submitting your {type}. We have received your details and will contact you shortly.

– PhysioCare Team
""")

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(sender_email, sender_password)
            smtp.send_message(doctor_msg)
            smtp.send_message(user_msg)
    except Exception as e:
        print("Email sending failed:", e)
