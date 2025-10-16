import { sql } from "./db.js";

sql`
 CREATE TABLE IF NOT EXISTS videos (
  id SERIAL PRIMARY KEY,
  title       TEXT,
  description TEXT,
  duration INTEGER
);`.then(() => {
  console.log("tabela criada!");
});
