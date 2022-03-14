from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='demo', email='demo@aa.io', password='password', first_name="Alvin", last_name="Zablan",  profile_image="https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/alvin-zablan-f989b9b0")
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', first_name="Marnie", profile_image="https://static.wikia.nocookie.net/studio-ghibli/images/2/21/Marnie.jpg/revision/latest?cb=20210411125648")
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', first_name="Bobby", last_name="Shmurda", profile_image="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ubgfm7dpcqof5thjd47o/bobby-shmurda-getty-2-bennett-raglin?fimg-ssr-default")
    chris = User(
        username='chris', email='chris@aa.io', password='password', first_name="Chris", last_name="Breen")


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(chris)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
