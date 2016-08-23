"use strict";


var solarSystemData = {
  title: "planets",
  body: "This are solar Systems",
  planets: [
    {
      type: "rocky",
      name: "Mercury"
    },
    {
      type: "rocky",
      name: "Venus"
    },
    {
      type: "rocky",
      name: "Earth"
    },
    {
      type: "rocky",
      name: "Mars"
    },
    {
      type: "gas giant",
      name: "Jupiter"
    },
    {
      type: "gas giant",
      name: "Saturn"
    },
    {
      type: "ice giant",
      name: "Uranus"
    },
    {
      type: "ice giant",
      name: "Neptune"
    }
  ]
 }
  // move taglineData into the main tmplate's context and then
  // the precompiled partial can access it

module.exports = solarSystemData;
