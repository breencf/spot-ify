from flask import Blueprint, jsonify, request
from app.models import User, Playlist, Song, Album, Artist, db

song_routes = Blueprint('songs', __name__)

# @song_routes.route('/')
# def all_songs():
#     print('route song:  ' + songs)
#     songs = Song.query.all()
#     return { 'songs': [song.to_dict() for song in songs] }
