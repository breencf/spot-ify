from .db import db
from .tables import playlist_like, user_follows
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.VARCHAR(50))
    last_name = db.Column(db.VARCHAR(50))
    profile_image = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.now())

    users_library = db.relationship('Library', back_populates='users_lib')
    playlists = db.relationship("Playlist", back_populates="user", cascade='all, delete, delete-orphan')
    #Child

    followers = db.relationship("User", primaryjoin=(user_follows.c.following_user_id == id),
                                        secondaryjoin=(user_follows.c.followed_user_id == id),
                                     secondary=user_follows, backref=db.backref("following", lazy="dynamic"),
                                     lazy="dynamic")
    # followed_user = db.relationship("User",  secondayjoin=(user_follows.c.followed_user_id == id),
    #                                 secondary=user_follows, back_populates="following_user")

    liking_user = db.relationship("Playlist", secondary=playlist_like, back_populates="liked_playlist")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):

        dict_playlists = []
        for playlist in self.playlists:
            dict_playlists.append(playlist.to_dict())

        followers = [follower.to_dict() for follower in self.followers]
        # followings = [following.to_dict() for following in self.following]

        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "profile_image": self.profile_image,
            "hashed_password": self.hashed_password,
            "created_at": self.created_at,
            "playlists": {"dict": dict_playlists},
            "followers": followers,
            # "followings": followings
        }
