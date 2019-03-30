//this will be the final file
//import {TWITTER_KEY, TWITTER_SECRET_KEY, TWITTER_TOKEN, TWITTER_SECRET_TOKEN} from './constants.js'
/*const axios = require("axios")
const base = "https://api.twitter.com/1.1/statuses/user_timeline.json?"
var test_id = "realDonaldTrump";
function set_id(id_to_set)
{
    test_id = id_to_set;
}

function getTweets(id)
{//https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2
    axios({
        method : 'get',
        url : base + "screen_name=" + id + "&count=2",
    })
    .then((response)=>
    {
        console.log(response);
    })
    .catch((error)=>
    {
        console.log(error);
    });
}

getTweets(test_id);*/
const TWITTER_KEY = "E2AYztI1jFmmiIerD9CQVuO4b";
const TWITTER_SECRET_KEY = "YxfpyTh19xyOcyBPkDsdP9SmnviQXRBMkkW3b28jpzWeN6ooON";
const TWITTER_TOKEN = "1057692323239186432-GLPJ2V0hPjzAvYKfn8n6rsynqFAypL";
const TWITTER_SECRET_TOKEN = "UzD9kjkbhmLsWD2SyA5G6dCtpp2dzQFtGOcE4wZW4m1EN";

var Twitter = require('twitter');
var test_id = "realDonaldTrump";
var client = new Twitter({
    consumer_key: TWITTER_KEY,
    consumer_secret: TWITTER_SECRET_KEY,
    access_token_key: TWITTER_TOKEN,
    access_token_secret: TWITTER_SECRET_TOKEN
  });
   
  var params = {screen_name: test_id};
  client.get('statuses/user_timeline.json?count=2', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
