const express = require('express');
const connect = require('./config/database')
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async() => {
  console.log('Server started on port 3000');
  await connect();
  console.log('Mongo db Connected');

  const tweetRepo = new TweetRepository();
  // const tweet = await tweetRepo.create({
  //   content: 'Tweet with Comment schema',
  // });
  // console.log(tweet);
  // const comment = await Comment.create({
  //   content: 'This is a comment'});
  // tweet.comments.push(comment);
  // await tweet.save();
  // console.log(tweet); 

  // const tweet = await tweetRepo.getWithComments('6672f8a2c6fce5f75200512f');
  // console.log(tweet);
});