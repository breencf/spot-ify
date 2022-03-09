from app.models import playlist
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField

from wtforms.validators import DataRequired, URL, Length, ValidationError
from app.models import Playlist


class EditPlayList(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(max=255, message='Must not be more than 255 characters')])
    image = TextAreaField('image')
    description = StringField('description', validators=[Length(max=255, message='Must not be more than 255 characters')])
