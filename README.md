# XTRMND-Intern-Task

## Live Application

The project is live at [https://xtrmnd-intern-task.vercel.app/](https://xtrmnd-intern-task.vercel.app/).
 

## Overview

The User List Application is a React-based web application built with TypeScript for XTRMND Intern Task Assignment. It provides a user-friendly interface for displaying and managing a list of users. Key features include searching, filtering, and viewing detailed user information. The application is designed to be containerized and easily deployable using Docker.

### Features
- **User List Display:** Presents a list of users with their basic information.
- **Search Functionality:** Allows users to filter the list by name.
- **Detailed View:** Expands to show additional details for each user.
- **Loading and Error Handling:** Manages loading states and errors effectively.
- **Context Management:** Utilizes React Context for user data management.

## Docker Setup

### Building the Docker Image

1. **Ensure Docker is installed** on your machine. You can download it from [Docker's official website](https://www.docker.com/products/docker-desktop).

2. **Build the Docker image** by running the following command in your terminal:

   docker build -t xtrmnd-intern-task .

3. **Run the Docker image** by running the following command in your terminal:

    docker run -p 5000:80 xtrmnd-intern-task

## Testing Locally

To run the tests locally, ensure that all dependencies are installed and run:

 npm test

**Local Development**: Use npm start for local development.

 **Build and Test**: Run npm run build and npm test to prepare for production.


