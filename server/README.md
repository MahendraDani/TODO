# Table of Contents

- [Table of Contents](#table-of-contents)
- [Schemas](#schemas)
  - [User](#user)
  - [Todo](#todo)
- [API Reference](#api-reference)
- [Routes to create in future](#routes-to-create-in-future)

# Schemas

## User

| Sr. No | Attribute   | Data type | Description                                  | Options                                                    |
| :----- | :---------- | :-------- | :------------------------------------------- | :--------------------------------------------------------- |
| 1      | `id`        | String    | A unique Id for user                         | Primary Key                                                |
| 2      | `firstName` | String    | First name of the user                       | ---                                                        |
| 3      | `lastName`  | String    | Last name of the user                        | ---                                                        |
| 4      | `fullName`  | String    | Full name of the user                        | ---                                                        |
| 5      | `email`     | String    | Email address of the user                    | Primary Key                                                |
| 6      | `password`  | String    | Password created by the user                 | Hashed password is stored in database for security reasons |
| 7      | `createdAt` | String    | The date and time when user is first created | ISO formatted                                              |

## Todo

| Sr. No | Attribute     | Data type | Description                                  | Options           |
| :----- | :------------ | :-------- | :------------------------------------------- | :---------------- |
| 1      | `id`          | String    | A uniuqe id for each todo                    | Primary Key       |
| 2      | `userId`      | String    | The user's id who created the todo           | Secondary Key     |
| 3      | `title`       | String    | Title of the todo                            | ---               |
| 4      | `description` | String    | Description of the todo                      | ---               |
| 5      | `isCompleted` | Boolean   | Status of todo                               | `true` or `false` |
| 6      | `createdBy`   | String    | Full name of the user which created the todo | ---               |
| 7      | `createdAt`   | String    | Date and time when todo is created           | ---               |

# API Reference

| Sr. No | Method | Route                | Access                 | Description                             | Input                                                                                   | Output                                              |
| :----- | :----- | :------------------- | :--------------------- | :-------------------------------------- | :-------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| 1      | GET    | `/`                  | _Public_               | Home route                              | ---                                                                                     | Shows home route working                            |
| 2      | POST   | `/users/signup`      | _Public_               | Users can signup to the websapp         | Request Body : `{fisrtName,lastName,email,passowrd}`                                    | Creates a new user and saves it in the database     |
| 3      | POST   | `/users/login`       | _Public_               | Login to the webapp                     | Request Body : `{email, password}`                                                      | accessToken is generated for the user               |
| 4      | DELETE | `/users/delete/:id`  | _Public_& _Proctected_ | Delete a user's account                 | Request params : `{id:<userId>}`                                                        | Deletes the user's data from database               |
| 5      | GET    | `/todos`             | _Private_              | Displays all todos from the databse     | ---                                                                                     | ---                                                 |
| 6      | POST   | `/todos`             | _Public_&_Proctected_  | Create a new todo                       | Request Headers : `{id: <userId>}`, Request Body : `{title, description, isCompleted }` | Creates a new todo and stores it in the databse     |
| 7      | GET    | `/users/todos`       | _Public_&_Proctected_  | Display all todos of an individual user | Request Headers : `{id: <userId>}`                                                      | Shows all todos of that user                        |
| 8      | GET    | `/users/todos/:_id`  | _Public_&_Proctected_  | Displays a todo by its id               | Request Params : `{_id: <todoId>}`                                                      | Shows a todo by its id if it is present in database |
| 9      | DELETE | `/todos/delete/:_id` | _Public_&_Protected_   | Deletes a todo by its id                | Request Params : `{_id: <todoId>}`                                                      | Removes todo from database                          |

# Routes to create in future

1. PUT `/users` to update user details
2. PUT `/users/todos/:_id` to update a todo detials by its id
