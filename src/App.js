import "./styles.css";
import React, { useState } from "react";

const adventureList = {
  Sky: [
    {
      name: "Sky Dive",
      descp: "Activity of jumping from a high flying plane",
      rating: "5/5",
    },
    {
      name: "Para-Gliding",
      descp: "It means to run off the slopes with free parachutes",
      rating: "4.7/5",
    },
    {
      name: "Hot air Balloon",
      descp: "Moving in a cart that heats the air inside the balloon.",
      rating: "4.5/5",
    },
  ],

  Water: [
    {
      name: "Scuba Diving",
      descp: "The sport or activity of swimming underwater using a scuba.",
      rating: "5/5",
    },
    {
      name: "Surfing",
      descp:
        " It is done by riding the waves in the sea or the ocean by standing on a surfboard",
      rating: "5/5",
    },
    {
      name: "Rafting",
      descp: "The sport or pastime of travelling down a river on a raft.",
      rating: "5/5",
    },
  ],

  Ground: [
    {
      name: "Rock climbing",
      descp:
        "The sport of climbing rock faces, with the aid of ropes and special equipment.",
      rating: "4.8/5",
    },
    {
      name: "Mountain Biking",
      descp:
        "The sport or activity of riding a mountain bike, particularly off-road.",
      rating: "5/5",
    },
    {
      name: "Trekking",
      descp:
        "Trekking is a form of walking, undertaken with the specific purpose of exploring and enjoying the scenery.",
      rating: "4.5/5",
    },
  ],
};

export default function App() {
  const [selectedCategory, setCategory] = useState("Sky");
  function categoryClickHandler(type) {
    setCategory(type);
  }
  return (
    <div className="App">
      <h1> Adventure Recommendation </h1>

      <div>
        {Object.keys(adventureList).map((type) => (
          <button onClick={() => categoryClickHandler(type)}>{type}</button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {adventureList[selectedCategory].map((adventure) => (
            <li key={adventure.name}>
              <div className="name"> {adventure.name} </div>
              <div className="descp"> {adventure.descp} </div>
              <div className="rating"> {adventure.rating} </div>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
