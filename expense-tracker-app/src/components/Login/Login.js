import React, { useReducer, useContext } from "react";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import AuthContext from "../../store/auth-context";

const formReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      emailValue: action.val,
      passwordValue: state.passwordValue,
      isValid:
        action.val.includes("@") && state.passwordValue.trim().length > 6,
    };
  }
  if (action.type === "INPUT_EMAIL_BLUR") {
    return {
      emailValue: state.emailValue,
      passwordValue: state.passwordValue,
      isValid:
        state.emailValue.includes("@") && state.passwordValue.trim().length > 6,
    };
  }
  if (action.type === "PASSWORD_INPUT") {
    return {
      emailValue: state.emailValue,
      passwordValue: action.val,
      isValid: state.emailValue.includes("@") && action.val.trim().length > 6,
    };
  }
  if (action.type === "INPUT_PASSWORD_BLUR") {
    return {
      emailValue: state.emailValue,
      passwordValue: state.passwordValue,
      isValid:
        state.emailValue.includes("@") && state.passwordValue.trim().length > 6,
    };
  }
};

const Login = (props) => {
  const [formState, dispatchForm] = useReducer(formReducer, {
    emailValue: "",
    passwordValue: "",
    isValid: false,
  });

  const authCtx = useContext(AuthContext);

  const emailChangeHandler = (event) => {
    dispatchForm({ type: "EMAIL_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({ type: "PASSWORD_INPUT", val: event.target.value });
  };

  const validateHandler = (event) => {
    if (event.target.id === "email") dispatchForm({ type: "INPUT_EMAIL_BLUR" });
    else dispatchForm({ type: "INPUT_PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(formState.emailValue, formState.passwordValue);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            formState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.emailValue}
            onChange={emailChangeHandler}
            onBlur={validateHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.passwordValue}
            onChange={passwordChangeHandler}
            onBlur={validateHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formState.isValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
