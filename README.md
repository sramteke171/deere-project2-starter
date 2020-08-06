## Project 2 - Sachin Ramteke

![designerApp](homepage.gif)

## Project Overview

#Project Description
##Use this section to describe your final project and perhaps any links to relevant sites that help ##convey the concept and\or functionality.

Project Description
"Design Room" App helps users/designers to browse the available rooms to design, and use their creative skills to dcorate the rooms using the available list of design items such as sofa, chair, sidetable, coffee table, wall paintings.

## Minimum Viable Product (MVP):-

- Users/Designers can see available rooms to design
- Users can see the design items (ex. sofa, side table, chair etc..) to design their preferred room

* A working full-stack application, using Node.js, Postgres, Express and EJS
* Adherence to the MVC file structure: Models, Views, Controllers
* At least one model with all 7 RESTful routes and full CRUD.
* At least 2 models that are associated in some way (e.g. one-to-many, many-to-many, etc)
* ❗ A git repository not inside the class repo.
* At least one Github commit per day.

* Include at least 10 User Stories
* Include wireframes that you designed during the planning process
* Be deployed online and accessible to the public via Heroku
* Have a link to your hosted working app in the README.md file in your github repo

* A README.md file with explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc.

## Stretch Goal:

- more than 2 models
- Authentication - encrypt-decrypt passwords

Recommended Features

- Add additional relationships
- Include sign up/log in functionality, with encrypted passwords & an authorization flow
- Use EJS Partials
- Include portfolio-quality styling
- Use a CSS framework like Bootstrap
- Incorporate Google Maps

## Above & Beyond:

- Users can click design items to decorate the rooms.

## Project Links

github repo :- https://github.com/sramteke171/deere-project2-starter

deployment

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

ER Diagram: see ER_Digram.jpeg file (included under images folders)
![ER Diagram](/images/ER_Diagram.jpeg)

wireframes
react architecture
Define the the React components and the architectural design of your app.

## MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

MVP EXAMPLE

- Render data on page
- Allow user to interact with the page
- #Ex: - Find and use external api

Controllers:

- authController.js - for aunthentication routes
- userController.js - routes for user actions
- roomController.js - routes for room design
- itemController.js - for design items

Models:

- city.js
- user.js
- room.js
- item.js
- index.js

PostMVP, there would be addional Models:
For example, roomItems with many to many association

- roomItems.js

## Components

Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

Component Description
App This will make the initial data pull and include React Router
Header This will render the header include the nav
Footer This will render the header include the nav

## Time Frames

Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Component Priority Estimated Time Time Invetsted Actual Time
Adding Form H 4hrs 3.5hrs 3.5hrs
CSS H 4hrs 6 hrs 6hrs
Working with database,tables H 8hrs 6.5hrs 6.5hrs
coding H 8hrs 5.5hrs 5.5hrs
Testing H 4hrs 4hrs 4hrs
Documentation M 2hrs 2hrs 2hrs
Total H 30hrs 27.5hrs 27.5hrs

## Additional Libraries

- Dependencies on following packages:
  "bcryptjs": "^2.4.3",
  "cookie-parser": "^1.4.5",
  "dotenv": "^8.2.0",
  "ejs": "^3.1.3",
  "express": "^4.17.1",
  "jsonwebtoken": "^8.5.1",
  "method-override": "^3.0.0",
  "pg": "^8.3.0",
  "sequelize": "^6.3.3",
  "sequelize-cli": "^6.2.0"

## Code Snippet

## Issues and Resolutions

Example,
ERROR: app.js:34 Uncaught SyntaxError: Unexpected identifier
RESOLUTION: Missing comma after first object in sources {} object
