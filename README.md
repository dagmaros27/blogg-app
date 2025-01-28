### Blog Posting Platform Backend

This project provides the backend system for a blog posting platform where users can register, log in, and create and manage profiles, write and publish blog posts, and interact with posts through comments, likes, and ratings. The system also supports search functionality for users and posts.

---

## Features

### 1. User Authentication and Authorization

- JWT-based user authentication.
- Registration and login.
- Profile management (name, bio, profile picture, etc.).

### 2. Blog Management

- Create, update, delete, and view blog posts.
- Authorization ensures only the blog creator can update or delete the post.

### 3. Blog Rating

- Users can rate a blog post on a scale of 1-5.

### 4. Blog Interactions

- **Comments:** Users can add, edit, or delete their own comments on blog posts.
- **Likes:** Users can like or unlike blog posts.

### 5. Search

- Search users by name/username.
- Search blog posts by content, tags, or title.

---

## Technology Stack

- **Backend Framework:** Node.js, Express.js
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Token)
- **Testing:** Jest, Supertest

---

## Installation and Setup

Follow these steps to set up the backend system:

### Prerequisites

- Node.js
- Mongo DB
- Git

---

### Steps

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd blog-posting-platform-backend
   ```

2. **Install Dependencies**  
   Run the following command to install all required Node.js dependencies:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory with the following configuration:

   ```plaintext
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/mydb
   JWT_SECRET=<your-secret-key>
   ```

4. **Start the Server**  
   Start the backend server by running:

   ```bash
   npm start
   ```

---

## API Endpoints

## BASE_URL http://localhost:5000/api
- you can change 5000 with the port your backend is running

### Authentication

- `POST /auth/register` – Register a new user.
- `POST /auth/login` – Log in and obtain a JWT token.

### Blog Posts

- `POST /blogs` – Create a blog post.
- `GET /blogs` – Get all blog posts.
- `GET /blogs/:id` – Get a specific blog post.
- `PATCH /blogs/:id` – Update a blog post (requires authorization).
- `DELETE /blogs/:id` – Delete a blog post (requires authorization).

### Ratings

- `POST /blogs/:id/ratings` – Rate a blog post.

### Comments

- `POST /blogs/:id/comments` – Add a comment to a blog post.
- `PATCH /comments/:id` – Update a comment (requires authorization).
- `DELETE /comments/:id` – Delete a comment (requires authorization).

### Likes

- `POST /blogs/:id/likes` – Like a blog post.
- `DELETE /blogs/:id/likes` – Unlike a blog post.

### Search

- `GET /search/users?name=<query>` – Search for users by name/username.
- `GET /search/blogs?query=<query>` – Search for blog posts by content, tags, or title.


