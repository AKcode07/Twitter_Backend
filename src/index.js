const express = require('express');
const connect = require('./config/database')
const app = express();

const TweetService = require('./services/tweet-service')
app.listen(3000, async() => {
  console.log('Server started on port 3000');
  await connect();
  console.log('Mongo db Connected');
  // let service = new TweetService();
  // const tweet = await service.create(
  //   {
  //     content: 'is #tweets working ?'
  //   }
  // );
  // console.log(tweet);
});