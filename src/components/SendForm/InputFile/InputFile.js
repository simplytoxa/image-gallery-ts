import React, { PureComponent, Fragment } from 'react';
import Button from "../../../UI/Button/Button";
import propTypes from 'prop-types';

const inputStyles = {
  display: 'none'
};

class InputFile extends PureComponent {

  static propTypes = {
    onChange: propTypes.func
  };

  inputRef = React.createRef();

  handleInputClick = () => {
    this.inputRef.current.click();
  };

  render() {
    return (
      <Fragment>
        <input
          style={inputStyles}
          type="file"
          onChange={ this.props.onChange }
          ref={this.inputRef}
          placeholder="Search"
          accept="image/*" />
        <Button type="button" className="Button Button-solid" onClick={this.handleInputClick}>Browse</Button>
      </Fragment>
    );
  }
}

export default InputFile;
