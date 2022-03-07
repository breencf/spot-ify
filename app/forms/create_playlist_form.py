from app.models import playlist
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Playlist

def playlist_name(form, field):
    name = field.data
    playlist = Playlist.query.filter(Playlist.name == name).first()
    if playlist:
        raise ValidationError('This Playlist name is already used')

class PlayListForm(FlaskForm):

    name = StringField('name', validators=[DataRequired(), playlist_name])
    image = StringField('image', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
