import "./styles.css";
import React, { useState } from "react";

const adventureList = {
  Sky: [
    {
      name: "Sky Dive",
      place: "Dubai"
    },
    {
      name: "Para-Gliding",
      place: "Mexico"
    },
    {
      name: "Hot air Balloon",
      place: "Saubi-Arabia"
    }
  ],

  Water: [
    {
      name: "Scuba Diving",
      place: "Andamans"
    },
    {
      name: "Surfing",
      place: "GoldCoast, Australia"
    },
    {
      name: "Rafting",
      place: "Rishikesh"
    }
  ],

  Ground: [
    {
      name: "Rock climbing",
      place: "Maharashtra"
    },
    {
      name: "Mountain Biking",
      place: "Himachal"
    },
    {
      name: "Trekking",
      place: "Maharashtra"
    }
  ]
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
            <li key={adventureList.name}>
              <div className="name"> {adventure.name} </div>
              <div className="place"> {adventure.place} </div>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
