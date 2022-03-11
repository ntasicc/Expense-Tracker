import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [openForm, setOpenForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setOpenForm(false);
  };

  const openFormHandler = () => {
    setOpenForm(true);
  };

  const closeFormHandler = () => {
    setOpenForm(false);
  };

  if (openForm === false) {
    return (
      <div className="new-expense">
        <button onClick={openFormHandler}>Add New Expense</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onCancel={closeFormHandler}
        onSaveExpenseData={saveExpenseDataHandler}
        onInvalidInput={props.onInvalidInput}
      />
    </div>
  );
};

export default NewExpense;
