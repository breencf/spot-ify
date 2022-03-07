from .db import db
from .album import Album

class Artist(db.Model):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    image = db.Column(db.Text)
    bio = db.Column(db.Text)
    created_at = db.Column(db.DateTime)
    #Parent
    albums = db.relationship('Album', back_populates="artist", cascade='all, delete, delete-orphan')
    artists_library = db.relationship('Library', back_populates='songs_lib')
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
