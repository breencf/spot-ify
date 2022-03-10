from flask import Blueprint, jsonify, request
from app.models import User, Playlist, Song, Album, Artist, db
from flask_login import current_user, login_user, logout_user, login_required


song_routes = Blueprint('songs', __name__)

@song_routes.route('/')
def all_songs():
    songs = Song.query.all()

    print(songs)
    return { 'song_array': [song.to_dict() for song in songs] }
