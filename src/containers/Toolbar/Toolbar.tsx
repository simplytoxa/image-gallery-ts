import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Toolbar from '../../components/ToolBar/Toolbar';

export interface Props {
  children?: React.ReactNode;
  toggleModal: () => void;
}

export interface State {}

class ToolbarContainer extends Component<Props, State> {
  state: State = {};

  constructor(props: Props) {
    super(props);
  }

  render() {
    return <Toolbar toggleModal={this.props.toggleModal} />;
  }
}

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toogleModal
});

export default connect(mapStateToProps)(ToolbarContainer);
