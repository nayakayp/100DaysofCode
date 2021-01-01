import React from "react";

// import Tweets from "./Tweets";

const Tweet = (props) => (
  <div>
    <h1>{props.name}</h1>
    <p>{props.tweet}</p>
  </div>
);

export default Tweet;
