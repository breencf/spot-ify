from flask_wtf import FlaskForm
from wtforms import StringField
# from wtforms.validators import DataRequired


class PlayListForm(FlaskForm):

    name = StringField('name')
    image = StringField('image')
    description = StringField('description')
