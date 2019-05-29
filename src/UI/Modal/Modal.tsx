import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  onClose: () => void
}
class Modal extends React.Component<Props> {
  constructor(props: Props, private root: Element) {
    super(props);
  }

  componentWillMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root as Node);
  }

  clickHandler = (
    event: React.MouseEvent<
      HTMLDivElement,
      MouseEvent
    >
  ) => (event.target && event.target.id === 'modal') && this.props.onClose();

  render() {
    return ReactDOM.createPortal(
      <div className="Modal" id="modal" onClick={this.clickHandler}>
        <div className="Modal__children">
          <button className="Modal__close-button" onClick={this.props.onClose}>
            <FontAwesomeIcon icon="times" />
          </button>
          {this.props.children}
          </div>
      </div>,
      this.root
    );
  }
}

export default Modal;