# BlossomBud Readme

Welcome to BlossomBud, a React-based mobile application designed to help users nurture and care for their plants. This application utilizes an Express server, MongoDB as the database, and Mongoose as the Object-Relational Mapping tool.

## Features
1. Plant Management
Users can easily add and manage their plants in the garden. The app provides a user-friendly interface for adding each plant.

2. Plant Information
BlossomBud allows users to access valuable information about their plants. Users can view details about the plant's species, care instructions, and other relevant information to ensure optimal growth.

3. Watering Reminders
Never forget to water your plants again! BlossomBud reminds users about when to water each plant in their garden. This feature helps users maintain a consistent watering schedule to ensure they don't keep killing their plants (like I usually do).

4. Diary Functionality
Users can upload photos to keep track of their plants' growth and see how they blossom over time!

<img src="https://github.com/loickho/BlossomBud/blob/master/Garden.png?raw=true" alt="Screenshot of the garden page." style="float:left; margin-right: 10px;" height="500" />
<img src="https://github.com/loickho/BlossomBud/blob/master/plant-details.png?raw=true" alt="Screenshot of the plant details page." style="float:left; margin-right: 10px;" height="500" />

<br/>

## Tech Stack
Front-end: The front-end of the application is built using React.

Back-end: The back-end server is powered by Express.

Database: The application uses MongoDB as its database to store plant and user data. Mongoose is employed as the ORM to simplify interaction with the MongoDB database.

## What's missing
- Changing the addPlant dropdown into a textbox, that, when text is entered, will search for matches. If none are found, the user types in the name of the plant and the app makes an API call to openAI to grab the relevant data, then saves the data in the database.
- The diary needs some work.
- Images should be uploaded to cloudinary instead of being saved directly in the database.
- Refactoring the getUserPlant endpoint; the way it is now, if a user adds two of the same plant, the images get switched up.
- Implementing redux to manage state. There is currently quite a bit of prop drilling going on.
- Turning the app into a PWA.
- Making it so that when the app is opened on web, it will show what the app can do, and will tell the user to open on mobile to download. When the user opens on mobile, instructions pop up telling them how to install a PWA.

## To run the app:
Start the client with `npm run dev`
Start the server with `nodemon index.js`
Set up your MongoDB connection in server/models/index.js

Happy gardening with BlossomBud! 🌿🌱