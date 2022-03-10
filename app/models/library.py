from .db import db
from .tables import songs_library, albums_library, artist_library, playlist_library


class Library(db.Model):

    __tablename__ = 'library'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    playlist_id = db.Column(db.Integer, db.ForeignKey('playlists.id'))
    album_id = db.Column(db.Integer, db.ForeignKey('albums.id'))
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'))
    song_id =  db.Column(db.Integer, db.ForeignKey('songs.id'))

    users_lib = db.relationship("User", back_populates='users_library')
    playlists_lib = db.relationship("Playlist", back_populates='playlist_library', secondary=playlist_library )
    albums_lib = db.relationship("Album", back_populates='albums_library', secondary=albums_library )
    artists_lib = db.relationship("Artist", back_populates='artists_library', secondary=artist_library )
    songs_lib = db.relationship("Song", back_populates='songs_library', secondary=songs_library )

    def to_dict(self):
        # songs = []
        # for song in self.songs_lib:
        #     songs.append(song.to_dict())
        playlists = [playlist.to_dict() for playlist in self.playlists_lib]
        songs = [song.to_dict() for song in self.songs_lib]
        albums = [album.to_dict() for album in self.albums_lib]
        artists = [artist.to_dict() for artist in self.artists_lib]


        return{
            "id": self.id,
            "user_id": self.user_id,
            "playlist_id": self.playlist_id,
            "album_id": self.album_id,
            "artist_id": self.artist_id,
            "song_id": self.song_id,
            "songs": songs,
            "albums": albums,
            "artists": artists,
            "playlists": playlists

        }
