import express from "express";
import { connect } from "./config/database.js";
const app = express();

import TweetService from "./services/tweet-service.js";
app.listen(3000, async () => {
  console.log("Server started on port 3000");
  await connect();
  console.log("Mongo db Connected");
  // let service = new TweetService();
  // const tweet = await service.create(
  //   {
  //     content: 'is this #new #tweets working ?'
  //   }
  // );
  // console.log(tweet);
});
