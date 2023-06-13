import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [nextTitle, setNextTitle] = useState('Updated!!');

  const clickHandler = () => {
    var t = nextTitle;
    setNextTitle(title);
    setTitle(t);
    console.log(title);
    console.log(nextTitle);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description"></div>
      <h2>{title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
