# HNG Boilerplate API

## Table of Contents

1. [Introduction](#introduction)
2. [API Design](#api-design)
3. [Database Design](#database-design)
4. [Project Structure](#project-structure)
5. [Setup and Installation](#setup-and-installation)
6. [Usage](#usage)
7. [Environment Variables](#environment-variables)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

This is a comprehensive API for managing various entities such as organisations, users, payments, activity logs, etc. The API is built using Node.js, Express, and TypeScript, and follows best practices for project structure and code organization.

## API Design

The API follows RESTful principles and is defined using OpenAPI Specification (OAS) version 3.0. The detailed API documentation can be found in the `api.yaml` file.

### API Documentation

You can view the API documentation by opening the `api.yaml` file with an OpenAPI viewer or by using tools like Swagger UI.

#### Example Endpoints

- **Organisations**
  - `POST /api/organisations`: Create a new organisation
  - `GET /api/organisations`: Get all organisations
  - `GET /api/organisations/{id}`: Get an organisation by ID
  - `PATCH /api/organisations/{id}`: Update an organisation by ID
  - `DELETE /api/organisations/{id}`: Delete an organisation by ID

- **Users**
  - `GET /api/superadmin/users`: Get all users (Admin only)

- **Payments**
  - `GET /api/superadmin/payments`: Get all payments (Admin only)

For a full list of endpoints and detailed descriptions, refer to the `api.yaml` file.

## Database Design

The database schema includes entities such as User, Organisation, WaitlistEntry, Payment, and ActivityLog. Each entity is defined with its properties and relationships. click [here](https://dbdiagram.io/d/HNG-Stage-3-6691b8499939893daecee12c) to view the database design

### Entity Definitions

- **User**
  - `id`: string
  - `name`: string
  - `email`: string
  - `password`: string
  - `role`: enum (admin, user)

- **Organisation**
  - `id`: string
  - `name`: string
  - `description`: string
  - `users`: array of User

- **WaitlistEntry**
  - `id`: string
  - `email`: string
  - `createdAt`: date-time

- **Payment**
  - `id`: string
  - `amount`: number
  - `date`: date-time
  - `status`: string
  - `userId`: string

- **ActivityLog**
  - `id`: string
  - `action`: string
  - `timestamp`: date-time
  - `userId`: string

## Project Structure

The project follows a modular structure, separating concerns into different directories:

```
|--- src
|    |--- controllers      # Controllers for handling requests
|    |--- database         # Database configuration and entities
|    |--- interfaces       # TypeScript interfaces
|    |--- middlewares      # Middleware functions
|    |--- routes           # API route definitions
|    |--- services         # Business logic and services
|    |--- utils            # Utility functions
|    |--- index.ts        # Server setup and initialization
|--- .env                  # Environment variables
|--- .gitignore            # Git ignore file
|--- api.yaml              # OpenAPI specification file
|--- package.json          # Node.js dependencies and scripts
|--- tsconfig.json         # TypeScript configuration
```

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/hng-boilerplate-api.git
   cd hng-boilerplate-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the required environment variables. See the [Environment Variables](#environment-variables) section for details.

4. Run the application:
   ```bash
   npm start
   ```

## Usage

Once the server is running, you can access the API at `http://localhost:3000/api/v1`.

Use tools like Postman or curl to interact with the API endpoints. Refer to the `api.yaml` file for the full list of endpoints and their descriptions.

## Environment Variables

The application requires the following environment variables to be set in the `.env` file:

```
PORT=3000
DATABASE_URL=<your-database-url>
JWT_SECRET=<your-jwt-secret>
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
