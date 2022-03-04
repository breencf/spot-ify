from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key= True, nullable=False)
    username = db.Column(db.VARCHAR(50), nullable=False)
    first_name = db.Column(db.VARCHAR(50))
    last_name = db.Column(db.VARCHAR(50))
    profile_image = db.Column(db.Text)
    bio = db.Column(db.Text)
    hashed_password = db.Column(db.VARCHAR(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable = False)
    #Parent
    playlists = db.relationship("Playlist", back_populates="user", cascade='all, delete, delete-orphan')
    #Child

    following_user = db.relationship("User", secondary = "user_follows", back_populates="followed_user")
    followed_user = db.relationship("User", secondary = "user_follows", back_populates="following_user")

    liking_user = db.relationship("User", secondary="playlist_like", back_populates="liked_playlist")


    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "profile_image": self.profile_image,
            "bio": self.bio,
            "hashed_password": self.hashed_password,
            "created_at": self.created_at
        }


class Artist(db.Model):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    image = db.Column(db.Text)
    bio = db.Column(db.Text)
    created_at = db.Column(db.DateTime)
    #Parent
    albums = db.relationship('Album', back_populates="artist", cascade='all, delete, delete-orphan')
    songs = db.relationship("Song", back_populates="artist", cascade='all, delete, delete-orphan')
    #Child

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "bio": self.bio,
            "created_at": self.created_at
        }


class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    image = db.Column(db.Text)
    year = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime)
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
    #Parent
    songs = db.relationship("Song", back_populates="album", cascade='all, delete, delete-orphan' )
    #Child
    artist = db.relationship("Artist", back_populates='albums')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "year": self.year,
            "created_at": self.created_at
        }


class Song(db.Model):

    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.VARCHAR(200), nullable=False)
    audio = db.Column(db.VARCHAR, nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey("artists.id"), nullable=False)
    album_id = db.Column(db.Integer, db.ForeignKey("albums.id"), nullable=False)
    album_track_number = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    #Parent
    #Child
    artist = db.relationship("Artist", back_populates='songs')
    album = db.relationship("Album", back_populates='songs' )
    playlists = db.relationship("Playlist", secondary = "songs_playlist", back_populates="songs")


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "audio": self.audio,
            "artist_id": self.artist_id,
            "album_id": self.album_id,
            "album_track_number": self.album_track_number,
            "created_at": self.createdAt
        }


class Playlist(db.Model):

    __tablename__ = "playlists"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable= False)
    image = db.Column(db.String(255), nullable= False)
    descripion = db.Column(db.String(255), nullable= False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    #Parent
    #Child
    user = db.relationship("User", back_populates="playlists")
    songs = db.relationship("Song", secondary = "songs_playlist", back_populates="playlists")

    liked_playlist = db.relationship("Playlist", secondary = "playlist_like", back_populates="liking_user")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "description": self.description,
            "user_id": self.user_id,
        }



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
