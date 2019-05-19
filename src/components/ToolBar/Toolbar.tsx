import React, { PureComponent } from "react";
import Button from "../../UI/Button/Button";
import "./Toolbar.css";
import PropTypes from "prop-types";
import Status from "../Status/Status";
import Search from "../../UI/Search/Search";

class Toolbar extends PureComponent {
  static propTypes = {
    toggleModal: PropTypes.func,
    filesCount: PropTypes.number
  };

  toggleModal = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <div className="Toolbar">
        <span className="Toolbar-logo">Gallery</span>
        <Search onChange={this.props.onSearchChange} />
        <Status filesCount={this.props.filesCount} />
        <Button
          type="button"
          onClick={this.toggleModal}
          className="Button Button-primary"
        >
          Add photo
        </Button>
      </div>
    );
  }
}

export default Toolbar;
