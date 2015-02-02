#! venv/bin/python
from flask import Flask
from app import app

#my_app = Flask(__name__)
my_app = app

if __name__ == '__main__':
    my_app.run(host='0.0.0.0')
