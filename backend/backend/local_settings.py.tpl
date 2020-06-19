import os

ALLOWED_HOSTS = ['*']

# DATABASE
DATABASES = {
   'default': {
       'ENGINE': 'django.db.backends.postgresql_psycopg2',
       'NAME': os.getenv('DB_NAME', 'db_name'),
       'USER': os.getenv('DB_USER', 'db_username'),
       'PASSWORD': os.getenv('DB_PASS', 'db_password'),
       'HOST': os.getenv('DB_SERVICE', 'localhost'),
       'PORT': os.getenv('DB_PORT', '5432'),
   }
}

# EMAIL
EMAIL_HOST = ''
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
EMAIL_FROM_ADDRESS = ''


# Development server
if os.getenv('DEVSERVER', 'true') == 'true':
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
