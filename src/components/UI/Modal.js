import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Backdrop = (props) => {
  return (
    <div className="backdrop" onClick={props.onCloseCart}>
      {props.children}
    </div>
  );
};

const BackdropFavorite = (props) => {
  return (
    <div className="backdrop" onClick={props.onCloseFavorite}>
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {
  return <div className="modal">{props.children}</div>;
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export const ModalFavorite = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackdropFavorite onCloseFavorite={props.onCloseFavorite} />,
        portalElement
      )}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
