from flask import Blueprint, jsonify, redirect, request
from sqlalchemy.orm import joinedload
from flask_login import login_required
from app.models import User, Playlist, db, Album, Artist, Song
from app.forms import PlayListForm, EditPlayList, Search
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
        return {'playlist': playlist.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



@user_routes.route('/songs')
def all_songs():
    songs = Song.query.all()

    print(songs)
    return { 'song_array': [song.to_dict() for song in songs] }


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




@user_routes.route('/<int:userId>/playlists/<int:playlistId>/edit', methods=['POST'])
@login_required
def edit_user_playlist(userId, playlistId):
    form = EditPlayList()
    form['csrf_token'].data = request.cookies['csrf_token']
    playlist = Playlist.query.get(playlistId)
    if form.validate_on_submit():
        data=form.data
        playlist.name=data['name'],
        playlist.image=data['image'],
        playlist.description=data['description'],
        playlist.user_id=userId

        db.session.add(playlist)
        db.session.commit()
        return {"playlist": playlist.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@user_routes.route('/playlists/<int:user_id>/<int:playlist_id>/<int:song_id>/add', methods=["POST"])
# @login_required
def add_to_playlist(user_id, playlist_id, song_id):

    playlist = Playlist.query.get(playlist_id)
    song = Song.query.get(song_id)
    playlist.songs.append(song)

    db.session.commit()

    playlist_to_return = playlist.to_dict()
    # print("========================")
    # print(playlist_to_return["songs"]['dict'])
    # print("========================")

    return playlist_to_return







@user_routes.route('/search', methods=["GET", "POST"])
@login_required
def search():
    form = Search()
    form['csrf_token'].data = request.cookies['csrf_token']
    search_value = form.data['value']
    search = "%{}%".format(search_value)
    if form.validate_on_submit():
        artists = Artist.query.filter(Artist.name.like(search)).all()
        playlists = Playlist.query.filter(Playlist.name.like(search)).all()
        albums = Album.query.filter(Album.name.like(search)).all()
        songs = Song.query.filter(Song.name.like(search)).all()

        return {'Artist': [artist.to_dict() for artist in artists]}


    return {"broken", "not working"}
