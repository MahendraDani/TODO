# Home.jsx

- The dashboard page on the website
- All children components are in this file
- The token is verified here and stored in local storage
- The username is exracted and stored in local storage here

# Components

## Navbar.jsx

- Fully responsive navbar which is active before logging in to user's account.
- It is visible on the pages : landing, signup and logout page

## Sidebar.jsx

- It is left column of the dashboard
- **TODO** need to think how things will be visible in the sidebar

## dashboards/Header.jsx

- This is the header of the dashboard page
- Contains a searchbar(not functioning yet) and user profile on the right.

## Get.Todo.jsx

- Display all todos of a logged in user.
- Verifies token and userId is required.
- Should be used in Home.jsx to display the todos of the user, when they login or when they create a new one.

GET users/notes -- to see all notes of a user
GET users/notes/:id -- to see a note by its id
POST users/notes -- to create a new note
PUT users/notes/:id -- to update a note by its id
DELETE users/delete/:id -- to delete a note by its id
