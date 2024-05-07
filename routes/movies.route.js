import express from "express";
import {
  MovieCreate,
  MovieDelete,
  MovieIndex,
  MovieUpdate,
} from "../controllers/movies.controller.js";

const router = express.Router();

// R - For Reading
router.get("/", MovieIndex);

// C - For creating movies
router.post("/", MovieCreate);

// U - For updating movie
router.put("/:id", MovieUpdate);

//  D - For deleting movie
router.delete("/:id", MovieDelete);

export default router;
