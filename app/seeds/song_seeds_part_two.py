from app.models import db, Song, Artist, Album, Playlist, Library

def seed_artists():
    a1=Artist(name="Bob James", image="https://d2umolmz9zcmr8.cloudfront.net/unsafe/1440x0/filters:no_upscale():format(png)/contentmedia/9e10e941-d83b-4a1d-a9ff-807af79d59db.png", bio="")
    a2=Artist(name="Ahmad Jamal Trio", image="https://s3.amazonaws.com/allaboutjazz/media/large/7/2/5/31531415325c541af8eedd51628b8.jpg", bio="")
    a3=Artist(name="El Michels Affair", image="https://thewickedsound.com/wp-content/uploads/2020/04/www.thewickedsound.com-El-Michels-Affair-Life-of-People.jpg", bio="")
    a4=Artist(name="Fela Kuti", image="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170802082807-02-fela-kuti-legacy-0802.jpg", bio="")
    a5=Artist(name="Floating Points & Pharaoh Sanders", image="https://static01.nyt.com/images/2021/03/26/arts/25sanderspoints-review3/25sanderspoints-review3-mobileMasterAt3x.jpg", bio="")
    a6=Artist(name="Bronx River Parkway", image="https://m.media-amazon.com/images/I/81BLa1Wk1TL._SY355_.jpg", bio="")
    a8=Artist(name="Miles Davis", image="https://www.rollingstone.com/wp-content/uploads/2018/06/miles-davis-15-essential-albums-36cfea97-6c12-493e-967c-7661f6c08b72.jpg", bio="")
    a9=Artist(name="Sun Ra", image="https://i.guim.co.uk/img/static/sys-images/Arts/Arts_/Pictures/2014/6/13/1402677997846/Sun-Ra-009.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=09753ba708ba0bde32053d4214be4ae7", bio="")
    a7=Artist(name="Charlotte Dos Santos", image="https://thefader-res.cloudinary.com/private_images/c_limit,w_1024/c_crop,h_682,w_1023,x_1,y_76/w_400,c_limit,f_auto,q_auto:eco/static1.squarespace_zgdcna/static1.squarespace_zgdcna.jpg", bio="")

    db.session.add(a1)
    db.session.add(a2)
    db.session.add(a3)
    db.session.add(a4)
    db.session.add(a5)
    db.session.add(a6)
    db.session.add(a7)
    db.session.add(a8)
    db.session.add(a9)
    db.session.commit()


def seed_albums():
    a1=Album(name="BJ4", artist_id="", image="https://m.media-amazon.com/images/I/51X5HK096VL._SX355_.jpg", year="1977")
    a2=Album(name="The Awakening", artist_id="", image="https://m.media-amazon.com/images/I/31M0PETQF5L.jpg", year="1970")
    a3=Album(name="Sounding Out the City", artist_id="", image="https://f4.bcbits.com/img/a2941899221_10.jpg", year="2006")
    a4=Album(name="Live with Ginger Baker", artist_id="", image="https://upload.wikimedia.org/wikipedia/en/5/5b/Fela_Kuti_Live.jpg", year="1971")
    a5=Album(name="Promises", artist_id="", image="https://upload.wikimedia.org/wikipedia/en/a/ae/Promises_%28Floating_Points%2C_Pharoah_Sanders_and_the_London_Symphony_Orchestra%29.png", year="2021")
    a6=Album(name="San Sebastian 152", artist_id="", image="https://m.media-amazon.com/images/I/81BLa1Wk1TL._SY450_.jpg", year="2008")
    a7=Album(name="Kind of Blue", artist_id="", image="https://m.media-amazon.com/images/I/71dQKN2UEfL._SL1500_.jpg", year="1959")
    a8=Album(name="We Travel the Space Ways", artist_id="", image="https://upload.wikimedia.org/wikipedia/en/3/39/Saturn409afrontct.jpg", year="1967")
    a9=Album(name="Cleo", artist_id="", image="https://m.media-amazon.com/images/I/61PvqUJmwpL._SY355_.jpg", year="2017")
    a10=Album(name="Patience", artist_id="", image="https://i1.sndcdn.com/artworks-e2e18923-6c05-4888-9a5f-b212895c8ac4-0-t240x240.jpg", year="2021")
    a11=Album(name="Harvest Time", artist_id="", image="https://images-na.ssl-images-amazon.com/images/I/51dqC90wmmL._SX300_SY300_QL70_ML2_.jpg", year="2021")
    # a12=Album(name="", artist_id="", image="", year="")


    db.session.add(a1)
    db.session.add(a2)
    db.session.add(a3)
    db.session.add(a4)
    db.session.add(a5)
    db.session.add(a6)
    db.session.add(a7)
    db.session.add(a8)
    db.session.add(a9)
    db.session.add(a10)
    db.session.add(a11)
    db.session.commit()



# name audio artist id album id album track number
def seed_songs():
    s1=Song(name="Pure Imagination", artist_id=1, album_id=1, album_track_number=1, audio="")
    s2=Song(name="Where The Wind Blows Free", artist_id=1, album_id=1, album_track_number=2, audio="")
    s3=Song(name="Tappan Zee", artist_id=1, album_id=1, album_track_number=3, audio="")
    s4=Song(name="Nights Are Forever Without You", artist_id=1, album_id=1, album_track_number=4, audio="")
    s5=Song(name="Treasure Island", artist_id=1, album_id=1, album_track_number=5, audio="")
    s6=Song(name="El Verano", artist_id=1, album_id=1, album_track_number=6, audio="")

    s7=Song(name="The Awakening", artist_id=1, album_id=1, album_track_number=7, audio="")
    s8=Song(name="I Love Music", artist_id=1, album_id=1, album_track_number=8, audio="")
    s9=Song(name="Patterns", artist_id=1, album_id=1, album_track_number=9, audio="")
    s10=Song(name="", artist_id=1, album_id=1, album_track_number=10, audio="")
    s11=Song(name="", artist_id=1, album_id=1, album_track_number=11, audio="")
    s12=Song(name="", artist_id=1, album_id=1, album_track_number=12, audio="")

    s13=Song(name="", artist_id=1, album_id=1, album_track_number=1, audio="")
    s14=Song(name="", artist_id=1, album_id=1, album_track_number=2, audio="")
    s15=Song(name="", artist_id=1, album_id=1, album_track_number=3, audio="")
    s16=Song(name="", artist_id=1, album_id=1, album_track_number=4, audio="")
    s17=Song(name="", artist_id=1, album_id=1, album_track_number=5, audio="")
    s18=Song(name="", artist_id=1, album_id=1, album_track_number=6, audio="")
    s19=Song(name="", artist_id=1, album_id=1, album_track_number=7, audio="")
    s20=Song(name="", artist_id=1, album_id=1, album_track_number=8, audio="")
    s21=Song(name="", artist_id=1, album_id=1, album_track_number=9, audio="")
    s22=Song(name="", artist_id=1, album_id=1, album_track_number=10, audio="")
    s23=Song(name="", artist_id=1, album_id=1, album_track_number=11, audio="")
    s24=Song(name="", artist_id=1, album_id=1, album_track_number=12, audio="")
    s25=Song(name="", artist_id=1, album_id=1, album_track_number=8, audio="")
    s26=Song(name="", artist_id=1, album_id=1, album_track_number=9, audio="")
    s27=Song(name="", artist_id=1, album_id=1, album_track_number=10, audio="")
    s28=Song(name="", artist_id=1, album_id=1, album_track_number=11, audio="")
    s29=Song(name="", artist_id=1, album_id=1, album_track_number=12, audio="")
    s30=Song(name="", artist_id=1, album_id=1, album_track_number=8, audio="")
    s31=Song(name="", artist_id=1, album_id=1, album_track_number=9, audio="")
    s32=Song(name="", artist_id=1, album_id=1, album_track_number=10, audio="")
    s33=Song(name="", artist_id=1, album_id=1, album_track_number=11, audio="")
    s34=Song(name="", artist_id=1, album_id=1, album_track_number=12, audio="")



    sMod2 = Song.query.filter(Song.id %2 == 0).all()
    sMod3 = Song.query.filter(Song.id %3 == 0).all()
    sInt5g = Song.query.filter((Song.id%3 == 0)).all()
    sInt5l = Song.query.filter((Song.id%4 == 0)).all()
    sInt2= Song.query.filter(Song.id%1 == 0).all()
    sInt3= Song.query.filter(Song.id%5 == 0).all()


    p1 = Library.query.get(1)
    p2 = Library.query.get(2)
    p3 = Library.query.get(3)
    a1 = Album.query.get(1)

    p1.songs_lib=sMod2
    p2.songs_lib=sMod3
    p3.songs_lib=sInt2
    p1.albums_lib.append(a1)
    p2.albums_lib.append(a1)
    p3.albums_lib.append(a1)


    songs = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s34]
    for song in songs:
        db.session.add(song)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_artists():
    db.session.execute('TRUNCATE artists RESTART IDENTITY CASCADE;')
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_albums():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
