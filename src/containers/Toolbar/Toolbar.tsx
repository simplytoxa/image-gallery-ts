import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Toolbar from "../../components/ToolBar/Toolbar";
import * as actions from "../../store/actions";
import { ToolbarAction } from "../../store/actions/toolbar/toolbar";

export interface Props {
  children?: React.ReactNode;
  toggleModal: (isModalOpen: boolean) => ToolbarAction;
  isModalOpen: boolean; 
}

class ToolbarContainer extends Component<Props> {
  render() {
    return <Toolbar {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isModalOpen: state.toolbar.isModalOpen,
  count: state.gallery.count
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleModal: (isModalOpen: boolean): ToolbarAction => dispatch(actions.toggleModal(isModalOpen)),
  handleSearch: (): ToolbarAction => dispatch(actions.handleSearch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarContainer);
