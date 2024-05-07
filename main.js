import express from "express";
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 6969;

// Data understanding middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect DB
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Hello students!" });
});

// CRUD functionality of movies
app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
