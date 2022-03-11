from flask import Blueprint, jsonify, request
from app.models import User, Playlist, Song, Album, Artist, db
from flask_login import current_user, login_user, logout_user, login_required


song_routes = Blueprint('songs', __name__)

@song_routes.route('/')
def get_all_song():
    songs = Song.query.all()

    # print('\n \n', song.to_dict(), '\n \n')
    return {'songs': [song.to_dict() for song in songs]}

    
@song_routes.route('/<int:id>')
def get_song(id):
    song = Song.query.get(id)

    print('\n \n', song.to_dict(), '\n \n')
    return {'song': song.to_dict()}


