import pg from "pg";

const { Client } = pg;
const db = new Client({
  host: "localhost",
  user: "postgres",
  password: "56874646",
  database: "asoiaf",
  port: 5432,
});

db.connect();

export default db;
