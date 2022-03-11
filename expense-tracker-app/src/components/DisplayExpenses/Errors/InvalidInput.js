import classes from "./InvalidInput.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

const InvalidInput = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Invalid input</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onCloseWarningHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default InvalidInput;
