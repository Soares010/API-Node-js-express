import postgres from "postgres";
import "dotenv/config";

const { PGUSER, PGPASSWORD, PGHOST, PGDB } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDB}`;
export const sql = postgres(URL, { ssl: "require" });

