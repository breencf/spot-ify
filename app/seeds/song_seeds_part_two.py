from app.models import db, Song, Artist, Album, Playlist, Library

def seed_artists_1():
    a1=Artist(name="Bob James", image="https://d2umolmz9zcmr8.cloudfront.net/unsafe/1440x0/filters:no_upscale():format(png)/contentmedia/9e10e941-d83b-4a1d-a9ff-807af79d59db.png", bio="")
    a2=Artist(name="Ahmad Jamal Trio", image="https://s3.amazonaws.com/allaboutjazz/media/large/7/2/5/31531415325c541af8eedd51628b8.jpg", bio="")
    a3=Artist(name="El Michels Affair", image="https://thewickedsound.com/wp-content/uploads/2020/04/www.thewickedsound.com-El-Michels-Affair-Life-of-People.jpg", bio="")
    a4=Artist(name="Fela Kuti", image="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170802082807-02-fela-kuti-legacy-0802.jpg", bio="")
    a5=Artist(name="Floating Points & Pharaoh Sanders", image="https://static01.nyt.com/images/2021/03/26/arts/25sanderspoints-review3/25sanderspoints-review3-mobileMasterAt3x.jpg", bio="")
    a6=Artist(name="Bronx River Parkway", image="https://m.media-amazon.com/images/I/81BLa1Wk1TL._SY355_.jpg", bio="")
    a7=Artist(name="Miles Davis", image="https://www.rollingstone.com/wp-content/uploads/2018/06/miles-davis-15-essential-albums-36cfea97-6c12-493e-967c-7661f6c08b72.jpg", bio="")
    a8=Artist(name="Sun Ra", image="https://i.guim.co.uk/img/static/sys-images/Arts/Arts_/Pictures/2014/6/13/1402677997846/Sun-Ra-009.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=09753ba708ba0bde32053d4214be4ae7", bio="")
    a9=Artist(name="Charlotte Dos Santos", image="https://thefader-res.cloudinary.com/private_images/c_limit,w_1024/c_crop,h_682,w_1023,x_1,y_76/w_400,c_limit,f_auto,q_auto:eco/static1.squarespace_zgdcna/static1.squarespace_zgdcna.jpg", bio="")

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


def seed_albums_1():
    a1=Album(name="BJ4", artist_id=1, image="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/music+seeds/Bob+James+-+BJ4/cover.jpg", year=1977)
    a2=Album(name="The Awakening", artist_id=2, image="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Ahmad+Jamal+-+The+Awakening/cover.jpg", year=1970)
    a3=Album(name="Sounding Out the City", artist_id=3, image="https://f4.bcbits.com/img/a2941899221_10.jpg", year=2006)
    a4=Album(name="Live with Ginger Baker", artist_id=4, image="https://upload.wikimedia.org/wikipedia/en/5/5b/Fela_Kuti_Live.jpg", year=1971)
    a5=Album(name="Promises", artist_id=5, image="https://upload.wikimedia.org/wikipedia/en/a/ae/Promises_%28Floating_Points%2C_Pharoah_Sanders_and_the_London_Symphony_Orchestra%29.png", year=2021)
    a6=Album(name="San Sebastian 152", artist_id=6, image="https://m.media-amazon.com/images/I/81BLa1Wk1TL._SY450_.jpg", year=2008)
    a7=Album(name="Kind of Blue", artist_id=7, image="https://m.media-amazon.com/images/I/71dQKN2UEfL._SL1500_.jpg", year=1959)
    a8=Album(name="We Travel the Space Ways", artist_id=8, image="https://upload.wikimedia.org/wikipedia/en/3/39/Saturn409afrontct.jpg", year=1967)
    a9=Album(name="Cleo", artist_id=9, image="https://m.media-amazon.com/images/I/61PvqUJmwpL._SY355_.jpg", year="2017")
    a10=Album(name="Patience", artist_id=9, image="https://i1.sndcdn.com/artworks-e2e18923-6c05-4888-9a5f-b212895c8ac4-0-t240x240.jpg", year=2021)
    # a11=Album(name="Harvest Time", artist_id="", image="https://images-na.ssl-images-amazon.com/images/I/51dqC90wmmL._SX300_SY300_QL70_ML2_.jpg", year="2021")
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
    # db.session.add(a11)
    db.session.commit()



# name audio artist id album id album track number
def seed_songs_1():
    s1=Song(name="Pure Imagination", artist_id=1, album_id=1, album_track_number=1, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/music+seeds/Bob+James+-+BJ4/01+-+Pure+Imagination.mp3")
    s2=Song(name="Where The Wind Blows Free", artist_id=1, album_id=1, album_track_number=2, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/music+seeds/Bob+James+-+BJ4/02+-+Where+The+Wind+Blows+Free.mp3")
    s3=Song(name="Tappan Zee", artist_id=1, album_id=1, album_track_number=3, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/music+seeds/Bob+James+-+BJ4/03+-+Tappan+Zee.mp3")
    s4=Song(name="Nights Are Forever Without You", artist_id=1, album_id=1, album_track_number=4, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/music+seeds/Bob+James+-+BJ4/04+-+Nights+Are+Forever+Without+You.mp3")
    s5=Song(name="Treasure Island", artist_id=1, album_id=1, album_track_number=5, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/music+seeds/Bob+James+-+BJ4/05+-+Treasure+Island.mp3")
    s6=Song(name="El Verano", artist_id=1, album_id=1, album_track_number=6, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/music+seeds/Bob+James+-+BJ4/06+-+El+Verano.mp3")

    s7=Song(name="The Awakening", artist_id=2, album_id=2, album_track_number=1, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Ahmad+Jamal+-+The+Awakening/01+-+The+Awakening.mp3")
    s8=Song(name="I Love Music", artist_id=2, album_id=2, album_track_number=2, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Ahmad+Jamal+-+The+Awakening/02+-+I+Love+Music.mp3")
    s9=Song(name="Patterns", artist_id=2, album_id=2, album_track_number=3, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Ahmad+Jamal+-+The+Awakening/03+-+Patterns.mp3")
    s10=Song(name="Dolphin Dance", artist_id=2, album_id=2, album_track_number=4, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Ahmad+Jamal+-+The+Awakening/04+-+Dolphin+Dance.mp3")
    s11=Song(name="You're My Everything", artist_id=2, album_id=2, album_track_number=5, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Ahmad+Jamal+-+The+Awakening/05+-+You're+My+Everything.mp3")
    s12=Song(name="Stolen Moments", artist_id=2, album_id=2, album_track_number=6, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Ahmad+Jamal+-+The+Awakening/06+-+Stolen+Moments.mp3")
    s34=Song(name="Wave", artist_id=2, album_id=2, album_track_number=7, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Ahmad+Jamal+-+The+Awakening/07+-+Wave.mp3")

    s13=Song(name="Detroit Twice", artist_id=3, album_id=3, album_track_number=1, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/El+Michels+Affair+-+Sounding+Out+the+City/01+-+Detroit+Twice.mp3")
    s14=Song(name="Musings To Myself", artist_id=3, album_id=3, album_track_number=2, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/El+Michels+Affair+-+Sounding+Out+the+City/02+-+Musings+To+Myself.mp3")
    s15=Song(name="Too Late To Turn Back", artist_id=3, album_id=3, album_track_number=3, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/El+Michels+Affair+-+Sounding+Out+the+City/03+-+Too+Late+To+Turn+Back.mp3")
    s16=Song(name="El Pueblo Unido", artist_id=3, album_id=3, album_track_number=4, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/El+Michels+Affair+-+Sounding+Out+the+City/04+-+El+Pueblo+Unido.mp3")
    s17=Song(name="Behind The Blue Curtains", artist_id=3, album_id=3, album_track_number=5, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/El+Michels+Affair+-+Sounding+Out+the+City/05+-+Behind+The+Blue+Curtains.mp3")
    s18=Song(name="Ocho Rios", artist_id=3, album_id=3, album_track_number=6, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/El+Michels+Affair+-+Sounding+Out+the+City/06+-+Ocho+Rios.mp3")
    s19=Song(name="Yennicita", artist_id=3, album_id=3, album_track_number=7, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/El+Michels+Affair+-+Sounding+Out+the+City/07+-+Yennicita.mp3")
    s20=Song(name="Creation", artist_id=3, album_id=3, album_track_number=8, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/El+Michels+Affair+-+Sounding+Out+the+City/08+-+Creation.mp3")
    s21=Song(name="This Song's For You", artist_id=3, album_id=3, album_track_number=9, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/El+Michels+Affair+-+Sounding+Out+the+City/09+-+This+Song's+For+You.mp3")
    s22=Song(name="Slide Show", artist_id=3, album_id=3, album_track_number=10, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/El+Michels+Affair+-+Sounding+Out+the+City/10+-+Slide+Show.mp3")
    s23=Song(name="Hung Up On My Baby", artist_id=3, album_id=3, album_track_number=11, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/El+Michels+Affair+-+Sounding+Out+the+City/11+-+Hung+Up+On+My+Baby.mp3")

    s24=Song(name="Let's Start", artist_id=4, album_id=4, album_track_number=1, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Fela+Kuti+-+Fela+With+Ginger+Baker+Live!/01+-+Let's+Start+(feat.+Ginger+Baker)+(Live).mp3")
    s25=Song(name="Black Man's Cry", artist_id=4, album_id=4, album_track_number=2, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Fela+Kuti+-+Fela+With+Ginger+Baker+Live!/02+-+Black+Man%E2%80%99s+Cry+(with+Ginger+Baker)+(Live).mp3")
    s26=Song(name="Ye Ye De Smell", artist_id=4, album_id=4, album_track_number=3, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Fela+Kuti+-+Fela+With+Ginger+Baker+Live!/03+-+Ye+Ye+De+Smell+(with+Ginger+Baker)+(Live).mp3")
    s27=Song(name="Egbe Mi O (Carry Me)", artist_id=4, album_id=4, album_track_number=4, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Fela+Kuti+-+Fela+With+Ginger+Baker+Live!/04+-+Egbe+Mi+O+(Carry+Me)+%5Bwith+Ginger+Baker%5D+(Live).mp3")
    s28=Song(name="Ginger Baker and Tony Allen Drum Solo", artist_id=4, album_id=4, album_track_number=5, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Fela+Kuti+-+Fela+With+Ginger+Baker+Live!/05+-+Ginger+Baker+and+Tony+Allen+Drum+Solo+(Live+1978)+(Bonus+Track).mp3")

    s29=Song(name="Movement 1", artist_id=5, album_id=5, album_track_number=1, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Floating+Points+-+Promises/01+-+Movement+1.mp3")
    s30=Song(name="Movement 2", artist_id=5, album_id=5, album_track_number=2, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Floating+Points+-+Promises/02+-+Movement+2.mp3")
    s31=Song(name="Movement 3", artist_id=5, album_id=5, album_track_number=3, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Floating+Points+-+Promises/03+-+Movement+3.mp3")
    s32=Song(name="Movement 4", artist_id=5, album_id=5, album_track_number=4, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Floating+Points+-+Promises/04+-+Movement+4.mp3")
    s33=Song(name="Movement 5", artist_id=5, album_id=5, album_track_number=5, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Floating+Points+-+Promises/05+-+Movement+5.mp3")
    s34=Song(name="Movement 6", artist_id=5, album_id=5, album_track_number=6, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Floating+Points+-+Promises/06+-+Movement+6.mp3")
    s35=Song(name="Movement 7", artist_id=5, album_id=5, album_track_number=7, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Floating+Points+-+Promises/07+-+Movement+7.mp3")
    s36=Song(name="Movement 8", artist_id=5, album_id=5, album_track_number=8, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Floating+Points+-+Promises/08+-+Movement+8.mp3")
    s37=Song(name="Movement 9", artist_id=5, album_id=5, album_track_number=9, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Floating+Points+-+Promises/09+-+Movement+9.mp3")

    s38=Song(name="El Resbalon", artist_id=6, album_id=6, album_track_number=1, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/L.+Michels%2C+J.+Silverman%2C+Q.+Bright%2C+N.+Movshon%2C+E.+Velez+-+San+Sebastian+152/01+-+El+Resbalon.mp3")
    s39=Song(name="Agua Con Sal", artist_id=6, album_id=6, album_track_number=2, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/L.+Michels%2C+J.+Silverman%2C+Q.+Bright%2C+N.+Movshon%2C+E.+Velez+-+San+Sebastian+152/02+-+Agua+Con+Sal.mp3")
    s40=Song(name="La Valla", artist_id=6, album_id=6, album_track_number=3, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/L.+Michels%2C+J.+Silverman%2C+Q.+Bright%2C+N.+Movshon%2C+E.+Velez+-+San+Sebastian+152/02+-+Agua+Con+Sal.mp3")
    s41=Song(name="Nora Se Va", artist_id=6, album_id=6, album_track_number=4, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/L.+Michels%2C+J.+Silverman%2C+Q.+Bright%2C+N.+Movshon%2C+E.+Velez+-+San+Sebastian+152/04+-+Nora+Se+Va.mp3")
    s42=Song(name="Donde", artist_id=6, album_id=6, album_track_number=5, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/L.+Michels%2C+J.+Silverman%2C+Q.+Bright%2C+N.+Movshon%2C+E.+Velez+-+San+Sebastian+152/05+-+Donde.mp3")
    s43=Song(name="San Sebastian 152", artist_id=6, album_id=6, album_track_number=6, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/L.+Michels%2C+J.+Silverman%2C+Q.+Bright%2C+N.+Movshon%2C+E.+Velez+-+San+Sebastian+152/06+-+San+Sebastian+152.mp3")
    s44=Song(name="Me Toca", artist_id=6, album_id=6, album_track_number=7, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/L.+Michels%2C+J.+Silverman%2C+Q.+Bright%2C+N.+Movshon%2C+E.+Velez+-+San+Sebastian+152/07+-+Me+Toca.mp3")
    s45=Song(name="Para Los Rumberos", artist_id=6, album_id=6, album_track_number=8, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/L.+Michels%2C+J.+Silverman%2C+Q.+Bright%2C+N.+Movshon%2C+E.+Velez+-+San+Sebastian+152/08+-+Para+Los+Rumberos.mp3")
    s46=Song(name="Mi Corazon", artist_id=6, album_id=6, album_track_number=9, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/L.+Michels%2C+J.+Silverman%2C+Q.+Bright%2C+N.+Movshon%2C+E.+Velez+-+San+Sebastian+152/09+-+Mi+Corazon.mp3")
    s47=Song(name="Song For Ray", artist_id=6, album_id=6, album_track_number=10, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/L.+Michels%2C+J.+Silverman%2C+Q.+Bright%2C+N.+Movshon%2C+E.+Velez+-+San+Sebastian+152/10+-+Song+For+Ray.mp3")

    s48=Song(name="So What", artist_id=7, album_id=7, album_track_number=1, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Miles+Davis+-+Kind+Of+Blue/01+-+So+What+(feat.+John+Coltrane%2C+Cannonball+Adderley+%26+Bill+Evans).mp3")
    s49=Song(name="Freedie Freeloader", artist_id=7, album_id=7, album_track_number=2, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Miles+Davis+-+Kind+Of+Blue/02+-+Freddie+Freeloader+(feat.+John+Coltrane%2C+Cannonball+Adderley%2C+Wynton+Kelly+%26+Paul+Chambers).mp3")
    s50=Song(name="Blue in Green", artist_id=7, album_id=7, album_track_number=3, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Miles+Davis+-+Kind+Of+Blue/03+-+Blue+in+Green+(feat.+John+Coltrane+%26+Bill+Evans).mp3")
    s51=Song(name="All Blues", artist_id=7, album_id=7, album_track_number=4, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Miles+Davis+-+Kind+Of+Blue/04+-+All+Blues+(feat.+John+Coltrane%2C+Cannonball+Adderley+%26+Bill+Evans).mp3")
    s52=Song(name="Flamenco Sketches", artist_id=7, album_id=7, album_track_number=5, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Miles+Davis+-+Kind+Of+Blue/05+-+Flamenco+Sketches+(feat.+John+Coltrane%2C+Cannonball+Adderley+%26+Bill+Evans).mp3")

    s53=Song(name="Interplanetary Music", artist_id=8, album_id=8, album_track_number=1, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Sun+Ra+-+We+Travel+the+Spaceways/01+-+Interplanetary+Music.mp3")
    s54=Song(name="Eve", artist_id=8, album_id=8, album_track_number=2, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Sun+Ra+-+We+Travel+the+Spaceways/01+-+Interplanetary+Music.mp3")
    s55=Song(name="We Travel the Spaceways", artist_id=8, album_id=8, album_track_number=3, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Sun+Ra+-+We+Travel+the+Spaceways/03+-+We+Travel+the+Spaceways.mp3")
    s56=Song(name="Tapestry from an Asteroid", artist_id=8, album_id=8, album_track_number=4, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Sun+Ra+-+We+Travel+the+Spaceways/04+-+Tapestry+from+an+Asteroid.mp3")
    s57=Song(name="Space Loneliness", artist_id=8, album_id=8, album_track_number=5, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Sun+Ra+-+We+Travel+the+Spaceways/05+-+Space+Loneliness.mp3")
    s58=Song(name="New Horizons", artist_id=8, album_id=8, album_track_number=6, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Sun+Ra+-+We+Travel+the+Spaceways/06+-+New+Horizons.mp3")
    s59=Song(name="Velvet", artist_id=8, album_id=8, album_track_number=7, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Sun+Ra+-+We+Travel+the+Spaceways/07+-+Velvet.mp3")

    s60=Song(name="Summer Is Icumen In", artist_id=9, album_id=9, album_track_number=1, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Charlotte+Dos+Santos+-+Cleo/01+-+Sumer+Is+Icumen+In.mp3")
    s61=Song(name="Good Sign", artist_id=9, album_id=9, album_track_number=2, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Charlotte+Dos+Santos+-+Cleo/02+-+Good+Sign.mp3")
    s62=Song(name="Watching You", artist_id=9, album_id=9, album_track_number=3, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Charlotte+Dos+Santos+-+Cleo/03+-+Watching+You.mp3")
    s63=Song(name="Move On", artist_id=9, album_id=9, album_track_number=4, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Charlotte+Dos+Santos+-+Cleo/04+-+Move+On.mp3")
    s64=Song(name="Track 5", artist_id=9, album_id=9, album_track_number=5, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Charlotte+Dos+Santos+-+Cleo/05+-+%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9+%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.mp3")
    s65=Song(name="Red Clay", artist_id=9, album_id=9, album_track_number=6, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Charlotte+Dos+Santos+-+Cleo/06+-+Red+Clay.mp3")
    s66=Song(name="King of Hearts", artist_id=9, album_id=9, album_track_number=7, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Charlotte+Dos+Santos+-+Cleo/07+-+King+of+Hearts.mp3")
    s67=Song(name="Take it Slow", artist_id=9, album_id=9, album_track_number=8, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Charlotte+Dos+Santos+-+Cleo/08+-+Take+It+Slow.mp3")
    s68=Song(name="It's Over Bobby", artist_id=9, album_id=9, album_track_number=9, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Charlotte+Dos+Santos+-+Cleo/09+-+It's+Over%2C+Bobby.mp3")

    s69=Song(name="Patience", artist_id=9, album_id=10, album_track_number=1, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Charlotte+Dos+Santos+-+Patience/01+-+Patience.mp3")
    s70=Song(name="Away From You", artist_id=9, album_id=10, album_track_number=2, audio="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/Charlotte+Dos+Santos+-+Patience/02+-+Away+From+You.mp3")
    # s71=Song(name="", artist_id=9, album_id=10, album_track_number=3, audio="")



    sMod2 = Song.query.filter(Song.id %2 == 0).all()
    sMod3 = Song.query.filter(Song.id %3 == 0).all()
    sMod4 = Song.query.filter((Song.id%4 == 0)).all()
    sMod5 = Song.query.filter((Song.id%5 == 0)).all()
    sMod6 = Song.query.filter(Song.id%6 == 0).all()
    sMod7= Song.query.filter(Song.id%7 == 0).all()


    p1 = Library.query.get(1)
    p2 = Library.query.get(2)
    p3 = Library.query.get(3)
    a1 = Album.query.get(1)

    p1.songs_lib=sMod2
    p2.songs_lib=sMod3
    p3.songs_lib=sMod4
    p1.albums_lib.append(a1)
    p2.albums_lib.append(a1)
    p3.albums_lib.append(a1)


    songs = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s34, s35, s36, s37, s38, s39, s40, s41, s42, s43, s44, s45, s46, s47, s48, s49, s50, s51, s52, s53, s54, s55, s56, s57, s58, s59, s60, s61, s62, s64, s65, s66, s67, s68, s69, s70]
    for song in songs:
        db.session.add(song)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_artists_1():
    db.session.execute('TRUNCATE artists RESTART IDENTITY CASCADE;')
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_albums_1():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_songs_1():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
