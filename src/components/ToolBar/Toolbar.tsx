import * as React from 'react';
import Button from "../../UI/Button/Button";
import "./Toolbar.css";
import Status from "../Status/Status";
import Search from "../../UI/Search/Search";

interface ToolbarProps {
  isModalOpen: boolean;
  toggleModal: (isOpenModal: boolean) => void;
  count: number;
  handleSearch: () => void;
}

class Toolbar extends React.PureComponent<ToolbarProps> {
  private toggle = () => this.props.toggleModal(this.props.isModalOpen)

  render() {
    return (
      <div className="Toolbar">
        <span className="Toolbar-logo">Gallery</span>
        <Search handleSearch={this.props.handleSearch} />
        <Status filesCount={this.props.count} />
        <Button
          type="button"
          onClick={this.toggle}
          className="Button Button-primary"
        >
          Add photo
        </Button>
      </div>
    );
  }
};

export default Toolbar;
