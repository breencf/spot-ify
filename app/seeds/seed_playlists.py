from app.models import db, Playlist, Song

def seed_playlists():

    # sMod2 = Song.query.filter(Song.id %2 == 0).all()
    # sMod3 = Song.query.filter(Song.id %3 == 0).all()
    # sInt5g = Song.query.filter((Song.id%3 == 0)).all()
    # sInt5l = Song.query.filter((Song.id%4 == 0)).all()
    # sInt2= Song.query.filter(Song.id%1 == 0).all()
    # sInt3= Song.query.filter(Song.id%5 == 0).all()


    p1 = Playlist(name="Is This Thing on?", image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages-medium-large-5%2F1950s-cartoon-mic-semmick-photo.jpg&f=1&nofb=1', description='samplelistdescription1', user_id=1)
    p2 = Playlist(name="My Favorite Songs", image='https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_auto/c_limit,w_450/v1553008129/1553008126.jpg', description='samplelistdescription2', user_id=2)
    p3 = Playlist(name="My Least Favorite Songs", description='samplelistdescription3', user_id=2)
    p4 = Playlist(name="Testing, testing 1..2..3..", description='samplelistdescription4', user_id=1)
    p5 = Playlist(name="Music", description='samplelistdescription5', user_id=3)
    p6 = Playlist(name="Music 2.0", description='samplelistdescription6', user_id=3)

    # p1.songs=sMod2
    # p2.songs=sMod3
    # p3.songs=sInt2
    # p4.songs=sInt3
    # p5.songs=sInt5g
    # p6.songs=sInt5l


    db.session.add(p1)
    db.session.add(p2)
    db.session.add(p3)
    db.session.add(p4)
    db.session.add(p5)
    db.session.add(p6)

    db.session.commit()
