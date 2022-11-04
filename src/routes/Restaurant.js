import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RestaurantPageBody from "../components/RestaurantPageBody";
import { useParams } from "react-router-dom";
import BaskinRobinsMenu from "../images/baskin-robbins-menu.png";
import BimalaSweetsMenu from "../images/bimala-sweets-menu.png";
import CcdMenu from "../images/ccd-menu.jpg";
import DreamlandMenu from "../images/dreamland-menu.png";
import FoodCityMenu from "../images/food-city-menu.png";
import HeritageMenu from "../images/heritage-menu.png";
import MioAmoreMenu from "../images/mio-amore-menu.png";
import PeepsKitchenMenu from "../images/peeps-kitchen-menu.png";
import PfcMenu from "../images/pfc-menu.png";
import RadhakantaSweetsMenu from "../images/radhakanta-menu.png";

function Restaurant() {
  const { restaurantName } = useParams();

  let resName, text;

  switch (restaurantName) {
    case "Baskin Robbins":
      resName = BaskinRobinsMenu;
      text =
        "Although the ice cream was delicious, some students felt it was overpriced.";
      break;

    case "Bimala Sweets":
      resName = BimalaSweetsMenu;
      text =
        "Mixed opinions were observed on the quality of sweets. While some thought the quality was good, others said it was not up to the mark. According to popular opinion, the sweets are priced more than normal and not within the affordable range";
      break;

    case "Cafe Coffee Day":
      resName = CcdMenu;
      text =
        "According to popular opinion, the food was good but expensive. After the campus has reopened, students were unhappy with the removal of student subsidies, and most of them find the food to be overpriced";
      break;

    case "Dreamland":
      resName = DreamlandMenu;
      text =
        "With a rating of 2/5, Dreamland received mostly negative reviews. Customers stated that the food quality was poor and that the price they were charged was excessive. ";
      break;

    case "Food City":
      resName = FoodCityMenu;
      text =
        "Food City is one of those eateries that garnered mixed reviews in multiple facets. While some students thought that the food was 'great' and it served as their sweet economical escape from the mess food, others claimed improvement was needed in terms of food quality and that the food was too oily.";
      break;

    case "Heritage Restaurant":
      resName = HeritageMenu;
      text =
        "Heritage Restaurant received mostly negative feedback on the meal quality, menu variety, and service. We received several responses expressing that the meal quality was poor/bad and that it needed to be improved.";
      break;

    case "Mio Amore":
      resName = MioAmoreMenu;
      text =
        "With a fairly positive rating of 4/5, Mio Amore received praises for being ‘amazing’, a ‘good confectionery’ and a ‘good place for having snacks’.";
      break;

    case "Peeps Kitchen":
      resName = PeepsKitchenMenu;
      text =
        "Peeps Kitchen’s ratings were on the lower side as compared to the rest of the eateries. The common complaint was that the prices are too high and the service is substandard.";
      break;

    case "PAN Loop Fast Food Center":
      resName = PfcMenu;
      text =
        "PFC is one of the most popular go-to spots not only for the PAN loop inhabitants but also for the entire KGP community. However, not all the reviews we received were as sugary as we’d expected";
      break;

    case "Radhakanta Sweets":
      resName = RadhakantaSweetsMenu;
      text =
        "The customers unanimously agreed that the quality of food is quite good, but the non-acceptance of online payments is a bother. The customers have to withdraw cash in order to pay for their orders, and this is not always convenient.";
      break;
  }

  return (
    <>
      <Header />
      <RestaurantPageBody name={restaurantName} image={resName} text={text} />
      <Footer />
    </>
  );
}

export default Restaurant;
