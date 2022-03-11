import classes from "./InvalidInput.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const InvalidInput = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onCloseWarningHandler={props.onCloseWarningHandler}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default InvalidInput;
