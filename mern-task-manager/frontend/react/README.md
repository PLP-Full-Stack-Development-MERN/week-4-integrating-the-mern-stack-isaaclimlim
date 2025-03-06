# Task Manager

## Project Overview
The Task Manager is a full-stack web application that allows users to create, manage, and track tasks. Users can add new tasks, edit existing ones, mark them as completed, and delete them when no longer needed. The application consists of a React-based frontend and an Express.js backend with a MongoDB database.

## Features
- Create, edit, delete, and view tasks
- Task status updates (pending, in progress, completed)
- Due date assignment for tasks
- RESTful API for task management
- Responsive user interface built with React and Tailwind CSS

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or later)
- MongoDB
- npm or yarn

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/PLP-Full-Stack-Development-MERN/week-4-integrating-the-mern-stack-isaaclimlim.git
   cd week-4-integrating-the-mern-stack-isaaclimlim
   cd mern-task-manager/
   cd backend/
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `api` directory and add:
   ```env
   MONGO_URI=mongodb://localhost:27017/taskmanager
   PORT=5000
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### 1. Get All Tasks
- **URL:** `/tasks`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "_id": "12345",
      "title": "Task Title",
      "description": "Task description",
      "status": "pending",
      "dueDate": "2023-12-31"
    }
  ]
  ```

#### 2. Create a Task
- **URL:** `/tasks`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "title": "New Task",
    "description": "Task details",
    "status": "pending",
    "dueDate": "2023-12-31"
  }
  ```
- **Response:** `201 Created`

#### 3. Update a Task
- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Body:** (Example update)
  ```json
  {
    "status": "completed"
  }
  ```
- **Response:** `200 OK`

#### 4. Delete a Task
- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Response:** `200 OK`

## Usage Guide
1. Open the web application in your browser.
2. Click "Add Task" to create a new task.
3. Click "Edit" to modify a task.
4. Click "Delete" to remove a task.
5. Tasks will be fetched and updated dynamically.

## License
This project is open-source and available under the MIT License.


