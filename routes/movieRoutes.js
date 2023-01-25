import express from "express";
const router = express.Router();
import {
  getAllMovies,
  getMovieById,
  postMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";

//ROUTES
// GET ALL
router.get("/", getAllMovies);

// GET BY ID
router.get("/:id", getMovieById);

// POST
router.post("/", postMovie);
// PUT(UPDATE)
router.put("/:id", updateMovie);

// DELETE BY ID
router.delete("/:id", deleteMovie);

export default router;
