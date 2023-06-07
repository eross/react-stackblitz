import * as React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28, 2021</div>
      <div className="expense-item__description"></div>
      <h2>Car Insurance</h2>
      <div className="expense-item__price">294.67</div>
    </div>
  );
}
export default ExpenseItem;
