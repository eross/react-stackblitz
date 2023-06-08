import * as React from 'react';
import ExpenseDate from './ExpenseDate.tsx';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description"></div>
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
