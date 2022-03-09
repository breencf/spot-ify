from flask import Blueprint, jsonify, request
from app.models import User, Playlist, Song, Album, Artist, artist, db

artist_routes = Blueprint('artists', __name__)


@artist_routes.route('/<int:artistId>')
def get_artist(artistId):
    artist = Artist.query.get(artistId)

    return artist.to_dict()
