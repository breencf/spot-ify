from app.models import playlist
from flask_wtf import FlaskForm
from wtforms import StringField

from wtforms.validators import DataRequired, URL, Length, ValidationError
from app.models import Playlist

class Search(FlaskForm):
    value = StringField('value', validators=[DataRequired(), Length(max=255, message='Must not be more than 255 characters')])
