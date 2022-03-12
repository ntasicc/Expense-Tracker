import { useState, useContext } from "react";
import Expenses from "./components/DisplayExpenses/Expenses/Expenses";
import NewExpense from "./components/CreateExpense/NewExpense/NewExpense";
import InvalidInput from "./components/DisplayExpenses/Errors/InvalidInput";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

const demoExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(demoExpenses);
  const [invalidInput, setInvalidInput] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const ctx = useContext(AuthContext);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };

  const invalidInputHandler = (message) => {
    setWarningMessage(message);
    setInvalidInput(true);
  };

  const closeWarningHandler = () => {
    setInvalidInput(false);
    setWarningMessage("");
  };

  return (
    <>
      {invalidInput && (
        <InvalidInput
          message={warningMessage}
          onCloseWarningHandler={closeWarningHandler}
        />
      )}
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && (
          <>
            <NewExpense
              onAddExpense={addExpenseHandler}
              onInvalidInput={invalidInputHandler}
            />
            <Expenses items={expenses} />{" "}
          </>
        )}
      </main>
    </>
  );
};

export default App;
