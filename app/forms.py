from flask.ext.wtf import Form
from wtforms import StringField
from wtforms.validators import DataRequired

class AddressEntry(Form):
	address_entry = StringField('address_entry', validators=[DataRequired()])