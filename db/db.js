import { MongoClient } from 'mongodb';
// database url
const url = 'mongodb://0.0.0.0:27017';

// create a new MongoClient instance
const client = new MongoClient(url);

// connect to the database -- function used in index.js when we start the server
const connect = async () => {
  try {
    await client.connect();
    console.log('Connected to the database!!🚀');
  } catch (error) {
    console.error(error);
    await client.close();
  }
};

export { client, connect };
