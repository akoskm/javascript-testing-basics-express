import express from "express";
import DataStore from "./data";

// setup express
const app = express();
const dataStore = new DataStore();

// setup port
const port = process.env.PORT || 3000;

// setup routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const tweets = [];

app.post("/tweets", (req, res) => {
  dataStore.addTweet(req.body);
  res.send(`Tweet #${dataStore.tweets.length} is posted!`);
});

app.get("/tweets", (req, res) => {
  const tweets = dataStore.tweets.length > 0 ? dataStore.tweets : [];
  res.send(tweets);
});

export default app;
