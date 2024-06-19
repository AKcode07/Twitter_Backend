const express = require('express');
const connect = require('./config/database')
const app = express();

const Tweet = require('./models/tweet')

app.listen(3000, async() => {
  console.log('Server started on port 3000');
  await connect();
  console.log('Mongo db Connected');
  // const tweet = await Tweet.create({
  //   content: '3rd tweet',
  // });
  // console.log(tweet); 
  // const tweet = await Tweet.find({'userEmail': 'a@b.com'});
  // console.log(tweet);
});