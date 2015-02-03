from flask import render_template, flash, redirect
from app import app
from .forms import AddressEntry
from PinPointGeocoder.geocoder.engine import Engine
import sys


@app.route('/', methods=['GET', 'POST'])
def demo():
    form = AddressEntry()
    results = None
    marker = None
    lat = 51.505
    lon = -0.09

    if form.validate_on_submit():
        e = Engine()
        try:
            # print '\tTrying:(%s)' % form.address_entry.data
            results = e.geocode(form.address_entry.data)
            print results  # debug->lat/lon is getting rounded...
            if results['lat'] and results['lon']:
                marker = "var marker = L.marker([%s, %s]).addTo(map);" % (
                    results['lat'], results['lon'])
                lat = results['lat']
                lon = results['lon']
        except:
            results = None

    return render_template('address_entry.html',
                           lat=lat,
                           lon=lon,
                           results=results,
                           marker=marker,
                           form=form
                           )
