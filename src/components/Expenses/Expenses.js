import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses(props) {
  const [expenseFilter, setExpenseFilter] = useState('2020');
  const filterChangeHandler = (filter) => {
    setExpenseFilter(filter);
  };

  var result = props.items.filter(
    (item) => item.date.getFullYear() == expenseFilter
  );
  let content = <p className="none">No Expenses for this period </p>;

  if (result.length > 0) {
    content = result.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  console.log(content);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={expenseFilter}
          onFilterChange={filterChangeHandler}
        />
        {content}
      </Card>
    </div>
  );
}
