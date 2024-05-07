import express from "express";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "Hello students!" });
});

// CRUD functionality of movies

// R - For Reading
app.get("/movies", () => {});

// C - For creating movies
app.post("/movies", () => {});

// U - For updating movie
app.put("/movies/:id", () => {});

//  D - For deleting movie
app.delete("/movies/:id", () => {});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
