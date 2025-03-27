import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;
const db = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DBPORT,
});

try {
  db.connect();
  console.log("Server is connected to PostgreSQL");
} catch (error) {
  console.error("Server connection to PostgreSQL error", err.stack);
  process.exit(1);
}

export default db;
