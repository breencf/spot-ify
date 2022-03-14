# Spot-ify Clone


#Index
   - [Features](github.com/breencf/spotify-clone/wiki)

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

## Live Demo 

   - https://Spot-ify.herokuapp.com



