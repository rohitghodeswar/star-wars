import React from "react";
import SearchResult from "./../search-result/SearchResult";

export default function SearchResults({ results }) {
  let populations = [];
  results.forEach((data, index) => {
    if (data.population !== "unknown") {
      populations.push(parseInt(data.population));
    }
  });
  // numeric sort
  populations.sort(function(a, b) {
    return a - b;
  });
  let min = parseInt(populations[0]);
  let max = parseInt(populations[populations.length - 1]);
  let range = max - min;

  const planets = results.map((planet, i) => {
    let percentage = 0;
    if (planet.population !== "unknown") {
      let correctedStartValue = parseInt(planet.population) - min;
      percentage = (correctedStartValue * 100) / range;
    }
    planet.population_perc = percentage;

    return <SearchResult key={i} planet={planet} />;
  });
  return (
    <div>
      <ul className="list-group">{planets}</ul>
    </div>
  );
}
