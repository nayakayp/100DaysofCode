import React from "react";
import Tweet from "./Tweet";

const Tweets = (props) => {
  const tweets = [
    { name: "nayaka", tweet: "react Ugh, I need alpoco" },
    { name: "deved", tweet: "Whats up guys, Im out takin a break" },
    {
      name: "traversy media",
      tweet:
        "hey guys I'm simplified the web? guyss helloo, where's everybody?",
    },
  ];
  return (
    <section>
      {tweets.map((tweet) => (
        <Tweet name={tweet.name} tweet={tweet.tweet} />
      ))}
    </section>
  );
};

export default Tweets;
