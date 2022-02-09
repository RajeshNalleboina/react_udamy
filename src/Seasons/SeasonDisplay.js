import React from "react";
import "./seasonDispay.css";

const seasonConfig = {
  summer: {
    text: "Hey, Beach...!",
    iconName: "sun",
  },
  winter: {
    text: "Hey, It's chilly...!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  console.log(seasonConfig[season]);
  const { text, iconName } = seasonConfig[season]; // text iconName
  return (
    <div className={`season-display ${season}`}>
      {" "}
      <i className={`${iconName} icon massive left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive right`} />
    </div>
  );
};

export default SeasonDisplay;
