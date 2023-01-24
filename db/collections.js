import { client } from "./db.js";

// get the database and collection, we use it in index.js to perform queries to the database
const movieClient = client.db("syntra").collection("movies");

export { movieClient };
