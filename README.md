# Get your game on -- A JS backend programming project

Get your game on is a dating site where user's will be matched on their game preferences. 

![image](https://user-images.githubusercontent.com/33430669/77070457-8c941480-69ea-11ea-96a0-eb410babb2e0.png)

## Features

- Liking games
- Creating an account
- Logging into an account

## Data

This app makes use of the api [https://rawg.io/](https://rawg.io/) to fetch the games they have stored in their database. 

## Getting started

To install the project and all it's dependencies run the following command on your terminal:

```bash
npm run dev
```

### Setting up the database

To start using the app, you will need to connect to a mongodb instance. Please make an account and follow the instructions on the following site: [https://www.mongodb.com/cloud/atlas?tck=docs_server](https://www.mongodb.com/cloud/atlas?tck=docs_server). Afterwards you need to create a .env file in the root of the repository. There you will make the following variables:

```
MONGODB_URI=<insert your mongodb uri here>
SESSION_SECRET=<can be anything>
```

### Run project

To run this project you will need to run the following command on your terminal:


For development
```
npm run dev
```

For production

```
node app.js
```

## Acknowledgements

- [Mongodb - database](https://www.mongodb.com/)
- [Expressjs - framework](https://expressjs.com/)
- Me
- Myself
- & I
- The teachers of CMD (In particular Danny de Vries and Joost Faber for helping and teaching last year)
