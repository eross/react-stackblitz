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

  var result = props.items.filter((item) => item.date.getFullYear() == expenseFilter);
  console.log(result);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={expenseFilter}
          onFilterChange={filterChangeHandler}
        />

        {result.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
