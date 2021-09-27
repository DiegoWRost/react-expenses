import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// Convention is to repeat file name to method name
const ExpenseItem = (props) => {
  // React Hook (Can only be called inside component functions and outside nested functions)
  // Convention is [name, setName]
  // const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React');

  return (
    // Only one root element (1 div)
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  ); // No parenthesis when executing method because JS would execute function when parsing line
};

export default ExpenseItem;
