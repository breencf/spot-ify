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

