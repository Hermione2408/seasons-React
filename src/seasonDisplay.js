import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === "winter" ? "burr,it is chilly" : "Lets hit beach";
  const icon = season === "winter" ? "snowflake" : "sun";
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default seasonDisplay;
