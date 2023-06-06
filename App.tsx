import * as React from 'react';
import './css/style.css';
import ExpenseItem from './components/ExpenseItem';

export default function App() {
  return (
    <div>
      <h1>Hello Eric!</h1>
      <p>Start editing to see some magic happen here.</p>
      <ExpenseItem />
    </div>
  );
}
