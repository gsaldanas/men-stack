import Movie from "../models/MovieSchema.js";
const getAllMovies = async (req, res) => {
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
};
const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await Movie.findById(id);

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const postMovie = async (req, res) => {
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
};
const updateMovie = async (req, res) => {
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
};
const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Movie.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

export { getAllMovies, getMovieById, postMovie, updateMovie, deleteMovie };
