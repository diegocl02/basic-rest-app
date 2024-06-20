# Task Manager REST API

This is a simple REST API for managing a list of tasks, built with Node.js and Express.js.

## Features

- Create a new task
- Get a list of all tasks
- Get a specific task by ID
- Update a task's title or completion status
- Delete a task

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/basic-rest-app.git
   cd basic-rest-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. The API will be accessible at `http://localhost:3000`.

## Endpoints

### Create a new task

- **URL**: `/tasks`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "title": "Task title"
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Task title",
    "completed": false
  }
  ```

### Get all tasks

- **URL**: `/tasks`
- **Method**: `GET`
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "Task title",
      "completed": false
    }
  ]
  ```

### Get a specific task by ID

- **URL**: `/tasks/:id`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Task title",
    "completed": false
  }
  ```

### Update a task

- **URL**: `/tasks/:id`
- **Method**: `PUT`
- **Body** (optional fields):
  ```json
  {
    "title": "Updated task title",
    "completed": true
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Updated task title",
    "completed": true
  }
  ```

### Delete a task

- **URL**: `/tasks/:id`
- **Method**: `DELETE`
- **Response**: `204 No Content`

## License

This project is licensed under the MIT License.
