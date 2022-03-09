from flask.cli import AppGroup
from .users import seed_users, undo_users
from .seed_playlists import seed_playlists, undo_playlists
from .seed_songs import seed_artists, seed_albums, seed_songs, undo_albums, undo_artists, undo_songs

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_playlists()
    seed_artists()
    seed_albums()
    seed_songs()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_albums()
    undo_artists()
    undo_songs()
    undo_playlists()
    # Add other undo functions here
