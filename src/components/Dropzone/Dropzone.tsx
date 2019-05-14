import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Dropzone.css';

const stylesBorder = {
  borderColor: '#eee'
};

const stylesNoBorder = {
  border: 0,
  backgroundColor: '#fff'
};

class Dropzone extends PureComponent {
  static propTypes = {
    onDrop: PropTypes.func.isRequired
  };

  state = {
    hover: false,
    file: null
  };

  dragOverHandler = event => {
    event.stopPropagation();
    event.preventDefault();

    switch ( event.type ) {
      case 'dragover':
        return this.setState({ hover: true });
      case 'dragleave':
        return this.setState({ hover: false });
      default:
        return this.setState({ hover: false });
    }

  };

  dropHandler = event => {
    event.stopPropagation();
    event.preventDefault();
    this.setState({ hover: false });

    const file = event.dataTransfer.files[0];
    const isValid = file && (/\.(?=gif|jpg|png|jpeg)/gi).test(file.name);
    return isValid ? this.props.onDrop(file) : false;
  };

  render() {
    return (
        <div
          style={this.props.border ? stylesBorder : stylesNoBorder}
          className={this.state.hover ? 'Dropzone hover' : 'Dropzone'}
          onDragOver={this.dragOverHandler}
          onDragLeave={this.dragOverHandler}
          onDrop={this.dropHandler}>
          {this.props.children}
        </div>
    );
  }
}

export default Dropzone;
