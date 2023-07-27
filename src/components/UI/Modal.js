import { Fragment } from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children} </div>
    </div>
  );
}

export default function Modal(props) {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
