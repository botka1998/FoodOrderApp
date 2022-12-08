import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onHideCart} className={styles.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
function Modal(props) {
  return (
    <Fragment>
      {createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
      {createPortal(
        <ModalOverlay onClick={props.onHideCart}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
export default Modal;
