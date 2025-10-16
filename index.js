import express from "express";
// import { DatabaseMemory } from "./databaseMemory.js";
import { DatabasePostgres } from "./databasePostgres.js";
const app = express();
app.use(express.json());
// const database = new DatabaseMemory();
const database = new DatabasePostgres();
// GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS : MÉTODOS HTTP

app.post("/videos", async (request, response) => {
  const { title, description, duration } = request.body;
  await database.create({
    title,
    description,
    duration,
  });

  return response.status(201).json({ message: "criado!" });
});

app.get("/videos", async (request, response) => {
  const { search } = request.query;
  const videos = await database.list(search);

  return response.status(200).json(videos);
});

app.put("/videos/:id", async (request, response) => {
  const { id } = request.params;

  const { title, description, duration } = request.body;

  const video = await database.update(id, {
    title,
    description,
    duration,
  });

  return response.status(204).send();
});

app.delete("/videos/:id", async (request, response) => {
  const { id } = request.params;

  const video = await database.delete(id);

  return response.status(204).json({ message: "Deletado!" });
});

app.listen(3333, () => console.log("Servidor rodando!"));
