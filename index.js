import chalk from "chalk";
import express from "express";
import mongoose from "mongoose";

//variables
const app = express();
const port = 3000;
const endpoint = "/api/v1/movies";

// middleware
app.use(express.json());

//routes
//GET ALL
// GET /api/v1/movies
app.get(endpoint, async (req, res) => {
  try {
    const { title } = req.query;
    const movies = await movieClient.find({}).toArray();
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

//GET ALL BY ID
// GET /api/v1/movies/:id
app.get(`${endpoint}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await movieClient.findOne({ _id: ObjectId(id) });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/v1/movies
app.post(endpoint, async (req, res) => {
  try {
    const { title, releaseYear, actors, poster } = req.body;
    const result = await movieClient.insertOne({
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

// PUT /api/v1/movies/:id
//verander naam
app.put(`${endpoint}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const result = await movieClient.updateOne(
      { _id: ObjectId(id) },
      { $set: { title } }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE /api/v1/movies/:id
app.delete(`${endpoint}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await movieClient.deleteOne({ _id: ObjectId(id) });
    res.json(result);
  } catch (error) {
    console.error(error);
  }
});

//open the server port

(async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/syntra");
    app.listen(port, () =>
      console.log(chalk.bgGreen.bold(`http://localhost:${port}✅`))
    );
  } catch (error) {
    console.error(error);
  }
})();
