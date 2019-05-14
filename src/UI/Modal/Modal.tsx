import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Modal extends React.Component {
  componentWillMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  clickHandler = event => event.target.id === 'modal' ? this.props.onClose() : false;

  render() {
    return ReactDOM.createPortal(
      <div className="Modal" id="modal" onClick={this.clickHandler}>
        <div className="Modal__children">
          <a href className="Modal__close-button" onClick={this.props.onClose}>
            <FontAwesomeIcon icon="times" />
          </a>
          {this.props.children}
          </div>
      </div>,
      this.root
    );
  }
}

export default Modal;