import express from "express";
import { connect } from "./config/database.js";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


import apiRoutes from "./routes/index.js";

import { UserRepository,TweetRepository } from "./repository/index.js";
import LikeService from "./services/like-service.js";

app.use("/api", apiRoutes);

app.listen(3000, async () => {
  console.log("Server started on port 3000");
  await connect();
  console.log("Mongo db Connected");
  
  // const userRepo = new UserRepository();
  // const tweetRepo = new TweetRepository();
  // const tweets =await tweetRepo.getAll(0, 10);
  // const user = await userRepo.create({
  //   email: 'Ashwin@admin.com',
  //   password: '12345',
  //   name: 'Ashwin'
  // });
  
  // const likeservice = new LikeService();
  // await likeservice.toggleLike(
  //   tweets[0].id,
  //   "Tweet",
  //   "667843730eb399c6c3bef038"
  // );
});
