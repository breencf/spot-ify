from .db import db



songs_playlist = db.Table("songs_playlist",
    db.Column("playlist_order_number", db.Integer),
    db.Column("song_id", db.Integer, db.ForeignKey("songs.id"), primary_key=True ),
    db.Column("playlist_id", db.Integer, db.ForeignKey("playlists.id"), primary_key=True)
)


user_follows = db.Table("user_follows",
    db.Column("following_user_id", db.Integer, db.ForeignKey("users.id"), nullable=False, primary_key=True),
    db.Column("followed_user_id", db.Integer, db.ForeignKey("users.id"), nullable=False, primary_key=True))


playlist_like = db.Table('playlist_like', db.Column("user_id",
    db.ForeignKey("users.id"), nullable=False, primary_key=True),
    db.Column("playlist_id", db.ForeignKey("playlists.id"), nullable=False, primary_key=True))


songs_library = db.Table('songs_library',
    db.Column('song_id', db.Integer, db.ForeignKey('songs.id'), primary_key=True, nullable=False),
    db.Column('library_id', db.Integer, db.ForeignKey('library.id'), primary_key=True, nullable=False)
)

albums_library = db.Table('albums_library',
    db.Column('album_id', db.Integer, db.ForeignKey('albums.id'), primary_key=True, nullable=False),
    db.Column('library_id', db.Integer, db.ForeignKey('library.id'), primary_key=True, nullable=False)
)

artist_library = db.Table('artists_library',
    db.Column('artist_id', db.Integer, db.ForeignKey('artists.id'), primary_key=True, nullable=False),
    db.Column('library_id', db.Integer, db.ForeignKey('library.id'), primary_key=True, nullable=False)
)

playlist_library = db.Table('playlist_library',
    db.Column('playlist_id', db.Integer, db.ForeignKey('playlists.id'), primary_key=True, nullable=False),
    db.Column('library_id', db.Integer, db.ForeignKey('library.id'), primary_key=True, nullable=False)
)
