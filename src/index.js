import express from "express";
import { connect } from "./config/database.js";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


import apiRoutes from "./routes/index.js";

import TweetService from "./services/tweet-service.js";

app.use("/api", apiRoutes);

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
