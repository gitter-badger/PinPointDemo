# PinPointDemo
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
