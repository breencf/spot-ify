# Spot-ify 

  Our **Spot-ify** project is what one would suspect, a website designed to mimic the behavior of Spotify (aka a spotify clone), where you can listen to music, like songs, and create your own playlists. 

# Index
   - [Features List](https://github.com/breencf/spotify-clone/wiki)
   - [Database Schema](https://github.com/breencf/spotify-clone/wiki/User-Stories)
   - [User Stories](https://github.com/breencf/spotify-clone/wiki/User-Stories)
   - [Contributors](https://github.com/breencf/spotify-clone/wiki/About)
   - [Live Site](https://Spot-ify.herokuapp.com)

## Technologies Used

* Python
* Flask
* SQLAlchemy
* React
* Redux
* HTML
* CSS

## Splash page
![Screen Shot 2022-03-31 at 4 31 25 PM](https://user-images.githubusercontent.com/90711743/161166052-b7cac744-1e75-4cc7-959a-6cf90c035738.png)

## Search 
![Screen Shot 2022-03-31 at 4 32 13 PM](https://user-images.githubusercontent.com/90711743/161166136-63da1bec-fa1b-4765-a335-a74eb04b3287.png)

## Playlist
![Screen Shot 2022-03-31 at 4 33 04 PM](https://user-images.githubusercontent.com/90711743/161166216-a22d5a88-d19d-4d5b-bcc5-484c3336386d.png)


## Music player
![Screen Shot 2022-03-31 at 4 33 49 PM](https://user-images.githubusercontent.com/90711743/161166271-39926620-113e-4fdf-ab88-1eaac27eadbd.png)


## Setup

1. Clone the repository 

   ```bash
   git clone git@github.com:breencf/spotify-clone.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```
      cd into react-app folder
      
      ```
      npm install
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

         ```CREATE DATABASE <db_name>;```

      Create a POSTGRESQL user with the ability to create DB

         ```CREATE USER 'username' WITH PASSWORD 'password' CREATEDB;```

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the application enter your pipenv shell in the terminal and enter flask run, in a separate terminal cd into react-app folder and run npm start
     
7. Create a user to explore the site or click on demo user to explore the site freely. 



 



