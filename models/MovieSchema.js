import mongoose from "mongoose";

//use a variable
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    lowercase: true,
    required: true,
  },
  releaseYear: {
    type: String,
    required: true,
  },
  actors: {
    type: [String],
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
