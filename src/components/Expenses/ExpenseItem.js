import * as React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description"></div>
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button
        onClick={() => {
          console.log('Clicked!');
        }}
      >
        Change Title
      </button>
    </Card>
  );
}
export default ExpenseItem;
