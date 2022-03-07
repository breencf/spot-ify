from app.models import db, Playlist

def seed_playlists():
    p1 = Playlist(name="testPlaylist1", image='imageurlgoeshere1', description='samplelistdescription1', user_id=2)
    p2 = Playlist(name="testPlaylist2", image='imageurlgoeshere2', description='samplelistdescription2', user_id=2)
    p3 = Playlist(name="testPlaylist3", image='imageurlgoeshere3', description='samplelistdescription3', user_id=2)
    p4 = Playlist(name="testPlaylist4", image='imageurlgoeshere4', description='samplelistdescription4', user_id=2)
    p5 = Playlist(name="testPlaylist5", image='imageurlgoeshere5', description='samplelistdescription5', user_id=2)
    p6 = Playlist(name="testPlaylist6", image='imageurlgoesher6', description='samplelistdescription6', user_id=2)

    db.session.add(p1)
    db.session.add(p2)
    db.session.add(p3)
    db.session.add(p4)
    db.session.add(p5)
    db.session.add(p6)

    db.session.commit()
