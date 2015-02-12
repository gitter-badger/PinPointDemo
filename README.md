# PinPointDemo

[![Join the chat at https://gitter.im/taurenk/PinPointDemo](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/taurenk/PinPointDemo?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Demo Website for PinPoint Geocoder

### Add Geocoding Module
pull PinPointGeocoder into PinPointDemo/app/ directory

     cd PinPointDemo/app
     git clone https://github.com/taurenk/PinPointGeocoder.git

### Python Dependencies for Site

    cd PinPointDemo
    virtualenv venv
    venv/bin/pip install flask
    venv/bin/pip install flask-wtf

### Dependencies for Geocoder

    venv/bin/pip install jellyfish
    venv/bin/pip install psycopg2

### NGINX and UWSGI Setup

    TODO
