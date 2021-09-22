import React from "react";

import "./Card.css";

// Act as a shell to other components
const Card = props => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
