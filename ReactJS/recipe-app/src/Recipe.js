import React from "react";

const Recipe = ({ title, calories, imgUrl }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Calories: {calories}</p>
      <img src={imgUrl} alt="" />
    </div>
  );
};

export default Recipe;
