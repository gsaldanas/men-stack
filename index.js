import chalk from "chalk";
import express from "express";
import mongoose from "mongoose";
import movieRouter from "./routes/MovieRoutes.js";

//variables
const app = express();
const port = 3000;
const endpoint = "/api/v1/movies";

// middleware
app.use(express.json());

//routes
app.use(endpoint, movieRouter);

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
