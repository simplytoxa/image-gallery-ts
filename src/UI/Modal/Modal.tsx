import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  onClose: () => void;
  root: Element;
}

const Modal = (props: PropsWithChildren<Props>) => {
  const clickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    event.target && event.target.id === 'modal' && props.onClose();

  return ReactDOM.createPortal(
    <div className="Modal" id="modal" onClick={clickHandler}>
      <div className="Modal__children">
        <button className="Modal__close-button" onClick={props.onClose}>
          <FontAwesomeIcon icon="times" />
        </button>
        {props.children}
      </div>
    </div>,
    props.root
  );
};

export default Modal;
