from .db import db


class Library(db.Model):

    __tablename__ = 'library'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    playlist_id = db.Column(db.Integer, db.ForeignKey('playlists.id'))
    album_id = db.Column(db.Integer, db.ForeignKey('albums.id'))
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'))
    song_id =  db.Column(db.Integer, db.ForeignKey('songs.id'))

    users_lib = db.relationship("User", back_populates='users_library')
    playlists_lib = db.relationship("Playlist", back_populates='playlist_library' )
    albums_lib = db.relationship("Album", back_populates='albums_library' )
    artists_lib = db.relationship("Artist", back_populates='artists_library' )
    songs_lib = db.relationship("Song", back_populates='songs_library' )
