import React from "react";

export default function SerachResult({ planet }) {
  let fontSize = 20 + planet.population_perc;
  return (
    <li style={{ fontSize: fontSize }} className="list-group-item">
      {planet.name}
    </li>
  );
}
