from .db import db
# from .user import User
from .tables import playlist_like, songs_playlist
from .song import Song
from datetime import datetime

class Playlist(db.Model):

    __tablename__ = "playlists"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable= False)
    image = db.Column(db.String(255), nullable= False)
    description = db.Column(db.String(255), nullable= False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.now())
    #Parent
    #Child
    user = db.relationship("User", back_populates="playlists")
    playlist_library = db.relationship('Library', back_populates='playlists_lib')
    songs = db.relationship("Song", secondary=songs_playlist, back_populates="playlists")

    liked_playlist = db.relationship("User", secondary=playlist_like, back_populates="liking_user")




    def to_dict(self):

        dict_songs = []
        for song in self.songs:
            dict_songs.append(song.to_dict())

        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "description": self.description,
            "user_id": self.user_id,
            "created_at": self.created_at,
            "songs": {"dict": dict_songs}
        }
