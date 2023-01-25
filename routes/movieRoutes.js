import express from "express";
import Movie from "../models/MovieSchema.js";
const router = express.Router();

//ROUTES
// GET /api/v1/movies
router.get("/", async (req, res) => {
  try {
    const { title } = req.query;
    const movies = await Movie.find();
    if (title) {
      //check if movie title exist
      const filteredMovie = movies.filter((movie) => movie.title === title);
      console.log(filteredMovie);
      //return the movie
      return res.status(200).json(filteredMovie);
    }
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// // GET BY ID /api/v1/movies/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await Movie.findById(id);

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// // POST /api/v1/movies
router.post("/", async (req, res) => {
  try {
    const { title, releaseYear, actors, poster } = req.body;
    const result = await Movie.create({
      title,
      releaseYear,
      actors,
      poster,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// // PUT /api/v1/movies/:id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, releaseYear, actors, poster } = req.body;
    const result = await Movie.replaceOne(
      { _id: id },
      {
        title,
        releaseYear,
        actors,
        poster,
      }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// // DELETE /api/v1/movies/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Movie.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    console.error(error);
  }
});

export default router;
