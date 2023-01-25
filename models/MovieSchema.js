import mongoose from "mongoose";

new mongoose.Schema({
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
