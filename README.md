## Project 2 - Sachin Ramteke

## Project Overview

#Project Description
##Use this section to describe your final project and perhaps any links to relevant sites that help ##convey the concept and\or functionality.

Project Description
"Design Room" App helps users/designers to browse the available rooms to design, and use their creative skills to dcorate the rooms using the available list of design items

## Minimum Viable Product (MVP):-

- Users/Designers can see available rooms to design
- Users can see the design items (ex. sofa, side table, chair etc..) to design their prefeered room

* A working full-stack application, using Node.js, Postgres, Express and EJS
* Adhere to the MVC file structure: Models, Views, Controllers
* At least one model with all 7 RESTful routes and full CRUD.
* At least 2 models that are associated in some way (e.g. one-to-many, many-to-many, etc)
* ❗ A git repository not inside the class repo.
* At least one Github commit per day.
* At least [10 User Stories](Writing Good User Stories)
* Be deployed online and accessible to the public via Heroku
* Include at least 10 User Stories
* Include wireframes that you designed during the planning process
* Have a link to your hosted working app in the README.md file in your github repo
* A README.md file with explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc. Inside Your README.md:
  Check this file for a README template

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

ER Diagram: see ER_Digram.jpeg file (included with folders)
https://www.diagrameditor.com/webapp/?ui=atlas&tr=0&gh=0&gl=0&gapi=0&od=0&db=0&lang=en

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

- userController.js
- roomController.js

Models:

- city.js
- user.js
- room.js
- userroom.js

PostMVP EXAMPLE

- #ex. Add localStorage or firebase for storage

## Components

Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

Component Description
App This will make the initial data pull and include React Router
Header This will render the header include the nav
Footer This will render the header include the nav

## Time Frames

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Component Priority Estimated Time Time Invetsted Actual Time
Adding Form H 3hrs 3.5hrs 3.5hrs
Working with API H 3hrs 2.5hrs 2.5hrs
Total H 6hrs 5hrs 5hrs

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

function reverse(string) {
// here is the code to reverse a string of text
}

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

SAMPLE.....
ERROR: app.js:34 Uncaught SyntaxError: Unexpected identifier
RESOLUTION: Missing comma after first object in sources {} object
