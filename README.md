# Scouting1038

Built with Node.js, HTML, CSS, and love

## Getting Started


### Running Node server with remote database:

#### Mac/Linux
1. Clone git repository with `git clone https://github.com/LakotaRobotics1038/Scouting1038.git`
2. Change working directory with `cd Scouting1038`
3. Install required Node dependencies with `npm i`
4. Run project with nodemon using `DEBUG=Scouting1038:* npm run devstart`

#### Windows
1. Clone git repository with `git clone https://github.com/LakotaRobotics1038/Scouting1038.git`
2. Change working directory with `cd Scouting1038`
3. Install required Node dependencies with `npm install`
4. Run project with nodemon using `SET DEBUG=Scouting1038:* & npm start`

### Running Node server with local database:


#### Mac/Linux
1. Clone git repository with `git clone https://github.com/LakotaRobotics1038/Scouting1038.git`
2. Change working directory with `cd Scouting1038`
3. Install required Node dependencies with `npm i`
Open the project in your favorite text editor (I would suggest [atom](https://atom.io))
1. Open the `app.js` file, find the `var mongoDB =` followed by a long string, and replace the string with `mongodb://127.0.0.1/my_database`
4. [Install MongoDB Community Edition](https://docs.mongodb.com/manual/installation/#tutorials)
5. Run MongoDB database with `mongo`
4. Run project with nodemon using `DEBUG=Scouting1038:* npm run devstart`

#### Windows
1. Clone git repository with `git clone https://github.com/LakotaRobotics1038/Scouting1038.git`
2. Change working directory with `cd Scouting1038`
3. Install required Node dependencies with `npm install`
1. Open the project in your favorite text editor (I would suggest [atom](https://atom.io))
1. Open the `app.js` file, find the `var mongoDB =` followed by a long string, and replace the string with `mongodb://127.0.0.1/my_database`
4. [Install MongoDB Community Edition](https://docs.mongodb.com/manual/installation/#tutorials)
5. Run MongoDB database with `mongo`
7. Run project with nodemon using `SET DEBUG=Scouting1038:* & npm start`

## Dependencies:

- [express](https://expressjs.com) - Server for handling and routing HTTP requests
- [mongoose](https://mongoosejs.com) - Modeling and mapping of MongoDB to Javascript
- [pug](https://pugjs.org/api/getting-started.html) - HTML template engine for Node.js
