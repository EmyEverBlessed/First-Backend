Here's a simple README for the project:

 Simple Node.js API

Overview
This project is a simple RESTful API built with Node.js and Express.js for managing users. It includes basic operations such as listing all users, retrieving a user by ID, and creating a new user.

 Features
- Endpoints:
  - `GET /users` - List all users
  - `GET /users/:id` - Get user by ID
  - `POST /users` - Create a new user

- Data Storage: 
  Users' data is stored in a JSON file (`users.json`).

- Middleware 
  A logging middleware logs request details to a file (`logs.txt`) and the console.

 Setup and Running the Application

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
   Replace `[repository-url]` with the actual URL of the project repository.

2. Navigate to the project directory:
   ```bash
   cd simple-node-api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the server:
   ```bash
   node src/server.js
   ```
   The server will start on `http://localhost:3000`.

5. Endpoints:
   - GET /users - Retrieve all users.
   - GET /users/:id - Retrieve a user by ID.
   - POST /users- Create a new user (send a JSON body with user data).

Note
- Ensure the `users.json` file exists in the `data` directory with an initial empty array (`[]`).

- ## Testing Information
- **Test Date:** August 9, 2024


