from flask import Blueprint, jsonify, redirect, request
from sqlalchemy.orm import joinedload
from flask_login import login_required
from app.models import User, Playlist, db, Album, Artist, Song, Library, songs_library
from app.forms import PlayListForm, EditPlayList, Search
from app.api.auth_routes import validation_errors_to_error_messages



user_routes = Blueprint('users', __name__)

# @user_routes.route('/')
# @login_required
# def users():
#     users = User.query.all()
#     return {'users': [user.to_dict() for user in users]}

#GET A PROFILE
@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

#GET A USER'S PLAYLISTS
@user_routes.route('/<int:id>/playlists')
@login_required
def user_playlists(id):
    user_playlists = Playlist.query.filter(Playlist.user_id == id).all()
    print(user_playlists, 'are the playlsits printing out? ')
    return {'user_playlists': [playlist.to_dict() for playlist in user_playlists]}

#A USER CREATES A PLAYLIST
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


#GET A PLAYLIST
@user_routes.route('/<int:userId>/playlists/<int:playlistId>')
@login_required
def edit_playlist(userId,playlistId):
    playlist = Playlist.query.get(playlistId)
    if playlist:
        return {"playlist": playlist.to_dict()}
    else:
        return {"playlist": "deleted"}


#DELETE A PLAYLIST
@user_routes.route('/playlists/<int:playlistId>/delete', methods=['POST'])
@login_required
def delete_playlist(playlistId):
    playlist = Playlist.query.get(playlistId)
    db.session.delete(playlist)
    db.session.commit()
    return {"deleted": playlistId}



#EDIT A PLAYLIST
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


#ADD A SONG TO A PLAYLIST
@user_routes.route('/playlists/<int:user_id>/<int:playlist_id>/<int:song_id>/add', methods=["POST"])
def add_to_playlist(user_id, playlist_id, song_id):
    playlist = Playlist.query.get(playlist_id)
    song = Song.query.get(song_id)
    playlist.songs.append(song)

    db.session.commit()

    playlist_to_return = playlist.to_dict()

    return playlist_to_return


@user_routes.route('/search', methods=["POST"])
@login_required
def search():
    search_value = request.json
    result = search_value['value']
    search = "%{}%".format(result)
    users = User.query.filter(User.username.ilike(search)).all()
    artists = Artist.query.filter(Artist.name.ilike(search)).all()
    playlists = Playlist.query.filter(Playlist.name.ilike(search)).all()
    albums = Album.query.filter(Album.name.ilike(search)).all()
    songs = Song.query.filter(Song.name.ilike(search)).all()

    return {'Artist': [artist.to_dict() for artist in artists],
            'Playlist': [playlist.to_dict() for playlist in playlists],
            'Album': [album.to_dict() for album in albums],
            'User': [user.to_dict() for user in users],
            'Song': [song.to_dict() for song in songs],
            }

#DELETE FROM PLAYLIST
@user_routes.route('/playlists/<int:playlist_id>/<int:song_id>/delete', methods=['POST'])
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


@user_routes.route('/<int:userId>/library')
@login_required
def load_library(userId):
    library_data = Library.query.filter(Library.user_id == userId).first()


    # array= []
    # for data in library_data:
    #     if data.playlist_id:
    #         array.append(data.playlist_id)
    # playlist = library_data.filter(lambda:)

    # user_playlists = Playlist.query.filter(Playlist.id == library_data.playlist_id).all()


    # print('\n', user_playlists, 'testing out user playlists   \n \n')
    # print('\n', array, 'library data in the backend   \n \n')

    return library_data.to_dict()


@user_routes.route('/library/<int:albumId>/delete', methods=["POST"])
@login_required
def delete_library_album(albumId):
    value = request.json
    library = Library.query.get(value['libraryId'])
    user_album = Album.query.get(albumId)
    index = 0
    for album in library.albums_lib:
        if album == user_album:
            library.albums_lib.pop(index)
        index += 1

    db.session.commit()
    return {"test": "testing route to delete"}


@user_routes.route('/library/album/add', methods=['POST'])
@login_required
def add_library_album():
    value = request.json
    library = Library.query.get(value['userId'])
    album = Album.query.get(value['albumId'])

    library.albums_lib.append(album)
    db.session.commit()

    return {'test': 'is album added'}


@user_routes.route('/library/artist/add', methods=['POST'])
@login_required
def add_library_artist():
    value = request.json
    library = Library.query.get(value['userId'])
    artist = Artist.query.get(value['artistId'])

    library.artists_lib.append(artist)
    db.session.commit()

    return {'test': 'is album added'}


@user_routes.route('/library/artist/delete', methods=["POST"])
@login_required
def delete_library_artist():
    value = request.json
    library = Library.query.get(value['userId'])
    user_artist = Artist.query.get(value['artistId'])
    index = 0
    for artist in library.artists_lib:
        if artist == user_artist:
            library.artists_lib.pop(index)
        index += 1

    db.session.commit()
    return {"test": "testing route to delete"}


@user_routes.route('/library/playlist/add', methods=['POST'])
@login_required
def add_library_playlist():
    value = request.json
    library = Library.query.get(value['userId'])
    playlist = Playlist.query.get(value['playlistId'])

    library.playlists_lib.append(playlist)
    db.session.commit()

    return {'test': 'is album added'}


@user_routes.route('/library/playlist/delete', methods=["POST"])
@login_required
def delete_library_playlist():
    value = request.json
    library = Library.query.get(value['userId'])
    user_playlist = Playlist.query.get(value['playlistId'])
    index = 0
    for playlist in library.playlists_lib:
        if playlist == user_playlist:
            library.playlists_lib.pop(index)
        index += 1

    db.session.commit()
    return {"test": "testing route to delete"}



@user_routes.route('/library/song/add', methods=['POST'])
@login_required
def add_library_song():
    value = request.json
    library = Library.query.get(value['userId'])
    song = Song.query.get(value['songId'])

    library.songs_lib.append(song)
    db.session.commit()

    return {'test': 'is album added'}


@user_routes.route('/library/song/delete', methods=["POST"])
@login_required
def delete_library_song():
    value = request.json
    library = Library.query.get(value['userId'])
    user_song = Song.query.get(value['songId'])
    index = 0
    for song in library.songs_lib:
        if song == user_song:
            library.songs_lib.pop(index)
        index += 1

    db.session.commit()
    return {"test": "testing route to delete"}


@user_routes.route('/<int:userId>/followers')
@login_required
def load_followers(userId):
    user = User.query.filter(User.id == userId).first()
    allFollowers = [user.to_dict() for user in user.following.all()]
    return {"follows": allFollowers}



@user_routes.route('/followers/add', methods=['POST'])
@login_required
def add_user_follower():
    value = request.json
    user1 = User.query.get(value['userId'])
    other_user2 = User.query.get(value['otherUserId'])
    # print('\n \n', value, '\n \n')
    user1.following.append(other_user2)

    db.session.commit()

    return {'test': 'is album added'}


@user_routes.route('followers/delete', methods=['POST'])
@login_required
def remove_user_follow():
    value = request.json
    user1 = User.query.get(value['userId'])
    other_user2 = User.query.get(value['otherUserId'])
    user1.following.remove(other_user2)

    index = 0
    for user in user1.following.all():
        if user.id == other_user2.id:
            arr = user1.following.all()
            arr.pop(index)

        index += 1
    # index = 0
    # for user in user1.following.all():
    #     if user == other_user2:
    #         user1.following.all().pop(index)
    #     index += 1

    db.session.commit()
    return {"test": "testing route to delete"}
