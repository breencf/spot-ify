from .db import db
from datetime import datetime

class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    image = db.Column(db.Text)
    year = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
    #Parent
    albums_library = db.relationship("Library", back_populates='albums_lib')
    songs = db.relationship("Song", back_populates="album", cascade='all, delete, delete-orphan' )
    #Child
    artist = db.relationship("Artist", back_populates='albums')

    def to_dict(self):

        dict_songs = []
        for song in self.songs:
            dict_songs.append(song.to_dict())

        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "year": self.year,
            "created_at": self.created_at,
            "artist": self.artist.name,
            "artist_id": self.artist.id,
            "artist_image": self.artist.image,
            "songs": {"dict": dict_songs}
        }
