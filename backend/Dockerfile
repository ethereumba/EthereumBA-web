FROM python:3.5-onbuild
RUN apt-get update && apt-get install -y gettext

RUN mkdir -p /config
ADD requirements.txt /config/
ADD requirements-docker.txt /config/
RUN pip install -r /config/requirements.txt
RUN pip install -r /config/requirements-docker.txt
