import React from "react";
import Card from "./Card";

import baskinRobins from "../images/baskin-robins.png";
import bimalaSweets from "../images/bimala-sweets.png";
import ccd from "../images/ccd.png";
import dreamland from "../images/dreamland.png";
import foodCity from "../images/food-city.png";
import heritage from "../images/heritage.png";
import mioAmore from "../images/mio-amore.png";
import peepsKitchen from "../images/peeps-kitchen.png";
import pfc from "../images/pfc.png";
import radhakantaSweets from "../images/radhakanta-sweets.png";

function HomepageBody() {
  const restaurants = [
    {
      image: baskinRobins,
      name: "Baskin Robbins",
      location: "random",
    },
    {
      image: bimalaSweets,
      name: "Bimala Sweets",
      location: "random",
    },
    {
      image: ccd,
      name: "Cafe Coffee Day",
      location: "random",
    },
    {
      image: dreamland,
      name: "Dreamland",
      location: "random",
    },
    {
      image: foodCity,
      name: "Food City",
      location: "random",
    },
    {
      image: heritage,
      name: "Heritage Restaurant",
      location: "random",
    },
    {
      image: mioAmore,
      name: "Mio Amore",
      location: "random",
    },
    {
      image: peepsKitchen,
      name: "Peeps Kitchen",
      location: "random",
    },
    {
      image: pfc,
      name: "PAN Loop Fast Food Center",
      location: "random",
    },
    {
      image: radhakantaSweets,
      name: "Radhakanta Sweets",
      location: "random",
    },
  ];

  return (
    <div className="homepageBody">
      {restaurants.map((restaurant) => {
        return (
          <Card
            name={restaurant.name}
            image={restaurant.image}
            location={restaurant.location}
          />
        );
      })}
    </div>
  );
}

export default HomepageBody;
