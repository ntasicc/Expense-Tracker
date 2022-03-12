import { useState, useEffect } from "react";
import Expenses from "./components/DisplayExpenses/Expenses/Expenses";
import NewExpense from "./components/CreateExpense/NewExpense/NewExpense";
import InvalidInput from "./components/DisplayExpenses/Errors/InvalidInput";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("isLoggedIn");
    if (storedUser === "1") {
      setIsLoggedIn(true);
    }
  }, []);

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

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      {invalidInput && (
        <InvalidInput
          message={warningMessage}
          onCloseWarningHandler={closeWarningHandler}
        />
      )}
      <div>
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && (
            <>
              <NewExpense
                onAddExpense={addExpenseHandler}
                onInvalidInput={invalidInputHandler}
              />
              <Expenses items={expenses} />{" "}
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default App;
