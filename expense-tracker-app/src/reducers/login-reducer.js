export const formReducer = (state, action) => {
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
