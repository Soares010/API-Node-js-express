import { randomUUID } from "node:crypto";
import { sql } from "./db.js";
export class DatabasePostgres {
  #videos = new Map();

  async list(search = "") {
    let videos;

    if (search) {
      videos = await sql`select * from videos where title iIlike ${
        "%" + search + "%"
      }`;
    } else {
      videos = await sql`select * from videdos`;
    }

    return videos;
  }
  async create(video) {
    const id = randomUUID(); // NÃO PASSE ESSE ID SE ESTIVER A USAR BD RELACIONAL
    const { title, description, duration } = video;
    await sql`insert into videos (title, description, duration) VALUES (${title}, ${description}, ${duration})`;
  }

  update(id, video) {}
  delete(id) {}
}
