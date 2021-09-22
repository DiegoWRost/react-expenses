import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// Convention is to repeat file name to method name
const ExpenseItem = props => {
  const clickHandler = () => {
    console.log('Clicked!!!');
  };

  return (
    // Only one root element (1 div)
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  ); // No parenthesis when executing method because JS would execute function when parsing line
}

export default ExpenseItem;
