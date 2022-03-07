from .db import db
from .tables import songs_playlist
from .artist import Artist

class Song(db.Model):

    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(200), nullable=False)
    audio = db.Column(db.String, nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey("artists.id"), nullable=False)
    album_id = db.Column(db.Integer, db.ForeignKey("albums.id"), nullable=False)
    album_track_number = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    #Parent
    #Child
    artist = db.relationship("Artist", back_populates='songs')
    album = db.relationship("Album", back_populates='songs' )
    playlists = db.relationship("Playlist", secondary=songs_playlist, back_populates="songs")


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
