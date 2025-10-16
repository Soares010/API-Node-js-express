import express from "express";
import { DatabaseMemory } from "./databaseMemory.js";
const app = express();
app.use(express.json());
const database = new DatabaseMemory();

// GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS : MÉTODOS HTTP

app.post("/videos", (request, response) => {
  const { title, description, duration } = request.body;
  database.create({
    title,
    description,
    duration,
  });


  return response.status(201).json({ message: "criado!" });
});

app.get("/videos", (request, response) => {
  const videos = database.list();

  return response.status(200).json(videos);
});

app.put("/videos/:id", (request, response) => {
	const { id } = request.params;
	console.log(id);
	
  const { title, description, duration } = request.body;

  const video = database.update(id, {
    title,
    description,
    duration,
  });

  return response.status(204).send();
});

app.delete("/videos/:id", (request, response) => {
  const { id } = request.params;

  const video = database.delete(id);

  return response.status(204).json({ message: "Deletado!" });
});

app.listen(3333, () => console.log("Servidor rodando!"));
