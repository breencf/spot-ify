from flask.cli import AppGroup
from .users import seed_users, undo_users
from .library_seed import seed_library
from .seed_playlists import seed_playlists, undo_playlists
from .song_seeds_part_two import seed_artists_1, seed_albums_1, seed_songs_1, undo_albums_1, undo_artists_1, undo_songs_1
from .seed_songs import seed_albums, seed_artists, seed_songs


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_artists_1()
    seed_albums_1()
    seed_library()
    seed_songs_1()
    seed_playlists()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_albums_1()
    undo_artists_1()
    undo_songs_1()
    undo_albums()
    undo_artists()
    undo_songs()
    undo_playlists()
    # Add other undo functions here
