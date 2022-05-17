# Task Bud

## Description:
Task Bud is a web application that is meant to allow users to create new groups and 
within those groups be able create various tasks and add a schedule to those tasks.
This project is still a work in progress and is not meant to be used as a final product.
Currently what a user can do is, create an account, login, and then be able to navigate to
the groups page to create a new group. The user is able to create a new group by entering
a name that will be used to identify the group. Once they click the create button, the user is
then able to see the group they just created and all other groups that they have created. A user
can also delete a group by clicking the delete button. There is so much more that needs to be done
to make this project a full functioning application. My future plans for this project are to
be able to implement the functionality to add tasks to a group, and to add a schedule to a task. I
would like to also make sure a group/task/schedule can be edited/deleted. I would also like to in the
oveview page on the user dashboard, be able to showcase all the groups a user has created, the 
completed tasks, and the tasks that are due to be completed. Also I would like to display the most
recent tasks that have been created, to which group they belong, and the status of the task. I also
would like to continue to fully develop the functionality of the user profile page. I would like to add the functionality for a user to edit their profile and be able to delete their account.

## Issues: 
There are some small issues with this project.One of the issues I had is if a user tries to create a 
group that already exists, there should be an alert to the user that the group already exists. The error
message shows in the console, however, this message to a non computer science person is not very
clear. This is one of the issues I wanted to correct, but am still working on fixing it.

Another small issue I had was when a user logs in and is directed to their dashboard, I wanted to
have a header that shows the name of the user. However, I was not able to get the name of the user to 
display in the header. This is a small little issue that I wanted to fix, but am still working on it.

Other than that, the project works, but it is just missing more funcionality that I will be workign on adding.

## Front End Technologies/Frameworks/Languages:
- HTML
- CSS
- Animate.css (animation library) version 4.1.1
- Font Awesome (icons)
- Node.js
- Bulma version 0.9.3
- Bootstrap Version 5.1.3


## Back End Technologies/Frameworks/Languages:
- Express.js
- MySQL
- Node.js

## Entity Relationship Diagram:
![Fancy logo](./img/CPS%20593_%20Assignment%204.png#gh-dark-mode-only)
![Fancy logo](./img/CPS%20593_%20Assignment%204.png#gh-light-mode-only)
### User Entity:
The user entity is the entity that is used to create a new user. This entity has the following: 
- User ID (Primary Key to identify the user in the database)
- User Name (Name the user will use to login)
- User First Name (First name of the user)
- User Last Name (Last name of the user)
- User Password (Password the user will use to login)

### Group Entity:
The group entity is the entity that is used to create a new group. This entity has the following:
- Group ID (Primary Key to identify the group in the database)
- Group Name (Name the group will use to identify the group)
- User ID (Foreign Key to identify the user that created the group)

### Task Entity:
The task entity is the entity that is used to create a new task. This entity has the following:
- Task ID (Primary Key to identify the task in the database)
- Task Name (Name the task will use to identify the task)
- Task Description (Description of the task)
- Group ID  (Foreign Key to identify the group that the task belongs to)
- User ID (Foreign Key to identify the user that created the task)

### Schedule Entity:
The schedule entity is the entity that is used to create a new schedule. This entity has the following:
- Schedule ID (Primary Key to identify the schedule in the database)
- Task ID (Foreign Key to identify the task that the schedule belongs to)
- Schedule Date (Date the schedule is due)
- Schedule Time (Time the schedule is due)

## Installation:
To sucessfully be able run the project, you must install the following:
- npm init
- npm install express
- npm install nodemon --save-dev
- Under the scripts in the package.json file, add the following:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"dev": "nodemon index.js"
- npm install mysql2
- To then run the project, you must do the following:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;open the index.html file with live server if you have it.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then run the following command in the terminal:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm run dev








