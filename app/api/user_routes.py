from flask import Blueprint, jsonify, redirect, request
from sqlalchemy.orm import joinedload
from flask_login import login_required
from app.models import User, Playlist, db, Album, Artist, Song
from app.forms import PlayListForm
from app.api.auth_routes import validation_errors_to_error_messages

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/playlists')
@login_required
def user_playlists(id):
    user_playlists = Playlist.query.filter(Playlist.user_id == id).all()
    print(user_playlists, 'are the playlsits printing out? ')
    return {'user_playlists': [playlist.to_dict() for playlist in user_playlists]}

@user_routes.route('/<int:id>/playlists', methods=['POST'])
@login_required
def user_playlists_form(id):
    form = PlayListForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data=form.data
        playlist = Playlist(
            name=data['name'],
            image=data['image'],
            description=data['description'],
            user_id=id
        )
        db.session.add(playlist)
        db.session.commit()
<<<<<<< HEAD
<<<<<<< HEAD
        
=======
=======

    # return {"err": "Was not able to add new playlist"}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
>>>>>>> e2985411b29eac5a3a56c23d01ab9d0584d44c9c

@user_routes.route('/songs')
def all_songs():
    songs = Song.query.all()

    print(songs)
    return { 'song_array': [song.to_dict() for song in songs] }

<<<<<<< HEAD
    # return {"err": "Was not able to add new playlist"}
>>>>>>> add-songs
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


=======
>>>>>>> e2985411b29eac5a3a56c23d01ab9d0584d44c9c

@user_routes.route('/<int:userId>/playlists/<int:playlistId>')
@login_required
def edit_playlist(userId,playlistId):
    playlist = Playlist.query.get(playlistId)
    if playlist:
        return {"playlist": playlist.to_dict()}
    else:
        return {"playlist": "deleted"}

@user_routes.route('/<int:userId>/playlists/<int:playlistId>/delete', methods=['POST'])
@login_required
def delete_playlist(userId, playlistId):
    print('am i hitting above this dang route...')
    playlist = Playlist.query.get(playlistId)
    db.session.delete(playlist)
    db.session.commit()
    return {"deleted": "playlist delete success"}
