import React from "react";

function RestaurantPageBody(props) {
  return (
    <div className="restaurant">
      <h1>{props.name}</h1>
      <img className="resImage" src={props.image}></img>
      <p>{props.text}</p>
    </div>
  );
}

export default RestaurantPageBody;
