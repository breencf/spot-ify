from app.models import db, Library


def seed_library():

    l1= Library(user_id=1)
    l2= Library(user_id=2)
    l3= Library(user_id=3)


    db.session.add(l1)
    db.session.add(l2)
    db.session.add(l3)


    db.session.commit()
