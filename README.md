# 🎬 Favorite Movies & TV Shows API

A simple RESTful API built using **Node.js**, **Express**, **Sequelize**, and **PostgreSQL** that allows users to manage their favorite movies and TV shows.  
You can **add**, **view**, **update**, and **delete** your favorite movies or TV shows easily through clean and validated API endpoints.

---

## 🚀 Features

- Add, view, update, and delete your favorite movies or TV shows  
- Input validation using **Joi**  
- Database ORM using **Sequelize**  
- Centralized error handling  
- Async/await with clean function-based structure  
- Supports pagination and consistent JSON response format

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express.js  
- **ORM:** Sequelize  
- **Database:** PostgreSQL  
- **Validation:** Joi  
- **Language:** TypeScript  
- **Environment:** Node.js (v18+ recommended)

---

Clone the Repository

git clone https://github.com/togadiyamit/Favorite-Movies-TV-Shows-API.git

2️⃣ Navigate to the Project Directory

cd Favorite-Movies-TV-Shows-API

3️⃣ Install Dependencies

npm install

4️⃣ Create a PostgreSQL Database
Example: favorite_movies_tvshows_db
5️⃣ Add Environment Variables
Create a .env file in your project root:

PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=favorite_movies_tvshows_db
DB_DIALECT=postgres
DB_PORT=5432

6️⃣ Run Sequelize Migrations (if applicable)

npx sequelize-cli db:migrate

7️⃣ Seed Sample Data (optional)

npx sequelize-cli db:seed:all


---

## ▶️ Start the Project


Development Mode

npm run dev

Production Mode

npm start


Server will run at:  
`http://localhost:3000`

---

## 🧪 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/entries` | Add a new movie or TV show |
| GET | `/api/entries?page=1&limit=10` | List all entries (paginated) |
| PUT | `/api/entries/:id` | Update entry details |
| DELETE | `/api/entries/:id` | Delete an entry |
| GET | `api/entries/search?q=Inception'` | Search an entry |


---

## 🧰 Example Request



POST /api/entries
Content-Type: application/json

{
"title": "Inception",
"type": "Movie",
"director": "Christopher Nolan",
"budget": 160000000,
"location": "USA",
"duration": "2h 28m",
"year": 2010
}


---

## 🗃️ Database Table Schema

**Table:** `entries`



CREATE TABLE entries (
id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
type VARCHAR(50) NOT NULL,
director VARCHAR(255) NOT NULL,
budget NUMERIC(15,2) DEFAULT 0 NOT NULL,
location VARCHAR(255) NOT NULL,
duration VARCHAR(50) NOT NULL,
year INT NOT NULL
);




