from app.models import db, Song, Artist, Album

def seed_artists():
    a1=Artist(name="Chance the Rapper", image="https://media.pitchfork.com/photos/5d3b4641e82cca0008d4d2fc/16:9/w_4080,h_2295,c_limit/Chance-the-Rapper.jpg", bio="Chancelor Johnathan Bennett, known professionally as Chance the Rapper, is an American rapper, singer, and record producer. Born in Chicago, Bennett released his debut mixtape 10 Day in 2012. He began to gain mainstream recognition in 2013 after releasing his second mixtape, Acid Rap.")
    a2=Artist(name="Kilo Kish", image="https://media.newyorker.com/photos/590974e92179605b11ad8196/master/pass/Trammell-Kilo-Kish-States-Her-Name.jpg", bio="Kilo Kish is an alternative R&B singer, songwriter, and occasional rapper who has recorded with the Jet Age of Tomorrow, the Internet, Vince Staples, Gorillaz, Childish Gambino, and Chet Faker, among others. She has also released her own material. Born Lakisha Robinson in Orlando, Florida, she spent part of her childhood in New Jersey prior to returning to Orlando and was briefly in a pop group called D’Angelz. She moved to New York, attended the Pratt Institute, and worked as a model and waiter. Led by the dreamy “Navy,” her first EP, Homeschool, was self-released in April 2012. A couple years later, after assorted collaborative work, she connected with the music wing of French fashion label Kitsuné for Across, another EP of atmospheric, slackened R&B. In 2015, she appeared on Etienne de Crécy’s Super Discount 3 and Vince Staples’ Summertime ’06. Reflections in Real Time, a sprawling and deeply personal album that flitted between fully developed songs and fragmentary interludes, followed in February 2016.")
    a3=Artist(name="The Weeknd", image="https://iscale.iheart.com/catalog/artist/744880", bio="Abel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer-songwriter and record producer. Known for his sonic versatility and dark lyricism, Tesfaye's music explores escapism, romance, and melancholia, and is often inspired by personal experiences.")

    db.session.add(a1)
    db.session.add(a2)
    db.session.add(a3)
    db.session.commit()


def seed_albums():
    a1=Album(name="Acid Rap", artist_id="1", image="https://res.cloudinary.com/jadecabbage/image/upload/v1646670670/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/00_-_Chance_The_Rapper_Acid_Rap-front-large_i9b84r.jpg", year="2013")
    a2=Album(name="K+", artist_id="2", image="https://res.cloudinary.com/jadecabbage/image/upload/v1646670512/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/00_-_Kilo_Kish_K-front-large_dqbqps.jpg", year="2016")
    a3=Album(name="House of Balloons", artist_id="3", image="https://res.cloudinary.com/jadecabbage/image/upload/v1646670512/spotify-clone/The%20Weeknd%20-%20House%20Of%20Balloons%20%28DatPiff.com%29/00_-_The_Weeknd_House_Of_Balloons-front-large_md93lj.jpg", year="2011")

    db.session.add(a1)
    db.session.add(a2)
    db.session.add(a3)
    db.session.commit()



# name audio artist id album id album track number
def seed_songs():
    s1= Song(name="Good Ass Intro", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670618/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/01_-_Good_Ass_Intro_ft_BJ_The_Chicago_Kid_Lili_K_Kiara_Lanier_Peter_Cottontale_Will_for_the_Omys_DatPiff_Exclusive_mr5kr0.mp3", artist_id=1, album_id=1, album_track_number=1)
    s2= Song(name="Pusha Man", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670554/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/02_-_Pusha_Man_ft_Nate_Fox_Lili_K_Prod_by_Ceej_for_Two9_DatPiff_Exclusive_w1ppvy.mp3", artist_id=1, album_id=1, album_track_number=2)
    s3= Song(name="Cocoa Butter Kisses", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670669/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/03_-_Cocoa_Butter_Kisses_ft_Vic_Mensa_Twista_Prod_by_Cam_for_JUSTICE_League_Peter_Cottont_DatPiff_Exclusive_rkwkz6.mp3", artist_id=1, album_id=1, album_track_number=3)
    s4= Song(name="Juice", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670622/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/04_-_Juice_Prod_by_Nate_Fox_DatPiff_Exclusive_sqmggb.mp3", artist_id=1, album_id=1, album_track_number=4)
    s5= Song(name="Lost", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670589/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/05_-_Lost_ft_Noname_Gypsy_Prod_by_Nate_Fox_DatPiff_Exclusive_e7sxxx.mp3", artist_id=1, album_id=1, album_track_number=5)
    s6= Song(name="Everybody's Something", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670659/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/06_-_Everybodys_Something_ft_Saba_BJ_The_Chicago_Kid_Prod_by_DJ_Ozone_DatPiff_Exclusive_gyp8o6.mp3", artist_id=1, album_id=1, album_track_number=6)
    s7= Song(name="Interlude (That's Love)", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670564/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/07_-_Interlude_Thats_Love_Prod_by_Ludwig_Gorransen_DatPiff_Exclusive_qxups7.mp3", artist_id=1, album_id=1, album_track_number=7)
    s8= Song(name="Favorite Song", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670581/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/08_-_Favorite_Song_ft_Childish_Gambino_Prod_by_Nate_Fox_DatPiff_Exclusive_u1dsec.mp3", artist_id=1, album_id=1, album_track_number=8)
    s9= Song(name="NaNa", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670586/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/09_-_NaNa_ft_Action_Bronson_Prod_by_Brandun_Deshay_DatPiff_Exclusive_pbpzbn.mp3", artist_id=1, album_id=1, album_track_number=9)
    s10= Song(name="Smoke Again", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670652/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/10_-_Smoke_Again_ft_Ab-Soul_Prod_by_Blended_Babies_DatPiff_Exclusive_c4pnhr.mp3", artist_id=1, album_id=1, album_track_number=10)
    s11= Song(name="Acid Rain", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670606/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/11_-_Acid_Rain_Prod_by_Jake_One_DatPiff_Exclusive_rhtgdz.mp3", artist_id=1, album_id=1, album_track_number=11)
    s12= Song(name="Chain Smoker", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670627/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/12_-_Chain_Smoker_Prod_by_Nate_Fox_DatPiff_Exclusive_eqr9hy.mp3", artist_id=1, album_id=1, album_track_number=12)
    s13= Song(name="Everything's Good / Good Ass Outro", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670680/spotify-clone/Chance%20The%20Rapper%20-%20Acid%20Rap%20%28DatPiff.com%29/13_-_Everythings_Good_Good_Ass_Outro_Prod_by_Cam_for_JUSTICE_League_DatPiff_Exclusive_guzysn.mp3", artist_id=1, album_id=1, album_track_number=13)

    s14= Song(name="K+ Intro", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670514/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/01_-_K_Intro_pugikl.mp3", artist_id=2, album_id=2, album_track_number=1)
    s15= Song(name="Goldmine", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670549/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/02_-_Goldmine_dk0k8t.mp3", artist_id=2, album_id=2, album_track_number=2)
    s16= Song(name="Ghost", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670529/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/03_-_Ghost_cf6rre.mp3", artist_id=2, album_id=2, album_track_number=3)
    s17= Song(name="Trappin", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670545/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/04_-_Trappin_y6cpt7.mp3", artist_id=2, album_id=2, album_track_number=4)
    s18= Song(name="IOU", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670522/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/05_-_IOU_ajtlty.mp3", artist_id=2, album_id=2, album_track_number=5)
    s19= Song(name="Turquoise", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670522/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/06_-_Turquoise_ozt8gl.mp3", artist_id=2, album_id=2, album_track_number=6)
    s20= Song(name="Scones", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670536/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/07_-_Scones_sh3axp.mp3", artist_id=2, album_id=2, album_track_number=7)
    s21= Song(name="Love2k", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670531/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/08_-_Love2k_ryh0ob.mp3", artist_id=2, album_id=2, album_track_number=8)
    s22= Song(name="Better", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670553/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/09_-_Better_och30g.mp3", artist_id=2, album_id=2, album_track_number=9)
    s23= Song(name="Creepwave", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670584/spotify-clone/Kilo%20Kish%20-%20K%20%28DatPiff.com%29/10_-_Creepwave_wxg2xq.mp3", artist_id=2, album_id=2, album_track_number=10)

    s24= Song(name="High For This", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670613/spotify-clone/The%20Weeknd%20-%20House%20Of%20Balloons%20%28DatPiff.com%29/01_-_High_For_This_uzpqyj.mp3", artist_id=3, album_id=3, album_track_number=1)
    s25= Song(name="What You Need", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670613/spotify-clone/The%20Weeknd%20-%20House%20Of%20Balloons%20%28DatPiff.com%29/01_-_High_For_This_uzpqyj.mp3", artist_id=3, album_id=3, album_track_number=2)
    s26= Song(name="House of Balloons - Glass Table Girls", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670606/spotify-clone/The%20Weeknd%20-%20House%20Of%20Balloons%20%28DatPiff.com%29/02_-_What_You_Need_bvvptu.mp3", artist_id=3, album_id=3, album_track_number=3)
    s27= Song(name="The Morning", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670677/spotify-clone/The%20Weeknd%20-%20House%20Of%20Balloons%20%28DatPiff.com%29/04_-_The_Morning_en4xmg.mp3", artist_id=3, album_id=3, album_track_number=4)
    s28= Song(name="Wicked Games", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670674/spotify-clone/The%20Weeknd%20-%20House%20Of%20Balloons%20%28DatPiff.com%29/05_-_Wicked_Games_rhdvdz.mp3", artist_id=3, album_id=3, album_track_number=5)
    s29= Song(name="The Party - The After Party", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670555/spotify-clone/The%20Weeknd%20-%20House%20Of%20Balloons%20%28DatPiff.com%29/06_-_The_Party_The_After_Party_udje58.mp3", artist_id=3, album_id=3, album_track_number=6)
    s30= Song(name="Coming Down", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670657/spotify-clone/The%20Weeknd%20-%20House%20Of%20Balloons%20%28DatPiff.com%29/07_-_Coming_Down_rmvl1d.mp3", artist_id=3, album_id=3, album_track_number=7)
    s31= Song(name="Loft Music", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670545/spotify-clone/The%20Weeknd%20-%20House%20Of%20Balloons%20%28DatPiff.com%29/08_-_Loft_Music_gqj1g3.mp3", artist_id=3, album_id=3, album_track_number=8)
    s32= Song(name="The Knowing", audio="https://res.cloudinary.com/jadecabbage/video/upload/v1646670671/spotify-clone/The%20Weeknd%20-%20House%20Of%20Balloons%20%28DatPiff.com%29/09_-_The_Knowing_yhuiok.mp3", artist_id=3, album_id=3, album_track_number=9)




    songs = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32]
    for song in songs:
        db.session.add(song)


    db.session.commit()
