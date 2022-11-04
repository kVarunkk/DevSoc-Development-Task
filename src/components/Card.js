import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`/DevSoc-Development-Task/${props.name}`}>
      <div className="card">
        <img className="image" src={props.image}></img>
        <h2 className="name">{props.name}</h2>
        <p className="location">{props.location}</p>
      </div>
    </Link>
  );
}

export default Card;
