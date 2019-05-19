import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Toolbar from "../../components/ToolBar/Toolbar";
import * as actions from "../../store/actions";
import { ToolbarAction } from "../../store/actions/toolbar/toolbar";

export interface Props {
  children?: React.ReactNode;
  toggleModal: (isModalOpen: boolean) => ToolbarAction;
}

class ToolbarContainer extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <Toolbar {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isModalOpen: state.toolbar.isModalOpen
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleModal: (isModalOpen: boolean): ToolbarAction => dispatch(actions.toogleModal(isModalOpen))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarContainer);
