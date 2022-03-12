from flask import Blueprint, jsonify, request
from app.models import User, Playlist, Song, Album, Artist, db
from flask_login import current_user, login_user, logout_user, login_required
from app.forms import PlayListForm, EditPlayList, Search
from app.api.auth_routes import validation_errors_to_error_messages




playlist_routes = Blueprint("playlists", __name__)

#GET A PLAYLIST
@playlist_routes.route('/<int:playlistId>')
@login_required
def get_playlist(playlistId):
    playlist = Playlist.query.get(playlistId)
    if not playlist:
        return {'none': 'no playlist'}
    return {"playlist": playlist.to_dict()}

#EDIT A PLAYLIST
@playlist_routes.route('/<int:playlistId>/edit', methods=['POST'])
@login_required
def edit_user_playlist(playlistId):
    form = EditPlayList()
    form['csrf_token'].data = request.cookies['csrf_token']
    playlist = Playlist.query.get(playlistId)
    if form.validate_on_submit():
        data=form.data
        playlist.name=data['name'],
        playlist.image=data['image'],
        playlist.description=data['description'],


        db.session.add(playlist)
        db.session.commit()
        return {"playlist": playlist.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#ADD A SONG
@playlist_routes.route('/<int:playlist_id>/<int:song_id>/add', methods=["POST"])
def add_to_playlist(playlist_id, song_id):
    playlist = Playlist.query.get(playlist_id)
    song = Song.query.get(song_id)
    playlist.songs.append(song)

    db.session.commit()

    playlist_to_return = playlist.to_dict()

    return playlist_to_return

#DELETE A PLAYLIST
@playlist_routes.route('/<int:playlistId>/delete', methods=['POST'])
@login_required
def delete_playlist(playlistId):
    playlist = Playlist.query.get(playlistId)
    db.session.delete(playlist)
    db.session.commit()
    return {"deleted": playlistId}

#REMOVE A SONG
@playlist_routes.route('/<int:playlist_id>/<int:song_id>/delete', methods=['POST'])
@login_required
def delete_from_playlist(playlist_id, song_id):
    playlist = Playlist.query.get(playlist_id)
    song = Song.query.get(song_id)
    index = 0
    for playlist_song in playlist.songs:
        if playlist_song == song:
            # print('\n \n', song, '\n \n')
            playlist.songs.pop(index)
        index += 1

    db.session.commit()

    playlist_to_return = playlist.to_dict()

    return playlist_to_return
