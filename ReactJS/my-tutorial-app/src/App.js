import React, { useState } from "react";
import "./App.css";

// Import Components
import Nav from "./components/Nav";
import Video from "./components/Video";

function App() {
  // Write Javascript Here
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [videos, setVideo] = useState(["vid1", "vid2"]);

  const incrementer = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const toggler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="App">
      <Nav />
      <Video />
    </div>
  );
}

export default App;
