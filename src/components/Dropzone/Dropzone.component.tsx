import React, { PureComponent } from 'react';
import './Dropzone.component.css';

interface DropzoneProps {
  onDrop: (file: File | null) => void
}
class Dropzone extends PureComponent<DropzoneProps> {
  state = {
    hover: false,
    file: null
  };

  dragOverHandler = (event: any) => {
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

  dropHandler = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    this.setState({ hover: false });

    const file = event.dataTransfer && event.dataTransfer.files[0];
    const isValid = file && (/\.(?=gif|jpg|png|jpeg)/gi).test(file.name);
    return isValid ? this.props.onDrop(file) : false;
  };

  render() {
    return (
        <div
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
