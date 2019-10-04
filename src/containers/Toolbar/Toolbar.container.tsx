import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Toolbar from '../../components/ToolBar/Toolbar';
import * as actions from '../../store/actions';

export interface Props {
    children?: React.ReactNode;
    isModalOpen: boolean;
    count: number;
    toggleModal: (isModalOpen: boolean) => void;
    handleSearch: (term: string) => void;
}

const ToolbarContainer = (props: Props) => <Toolbar {...props} />;

const mapStateToProps = (state: any) => ({
    isModalOpen: state.gallery.isModalOpen,
    count: state.gallery.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleModal: (isModalOpen: boolean) => dispatch(actions.toggleModal(isModalOpen)),
    handleSearch: (term: string) => dispatch(actions.handleSearch(term)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToolbarContainer);
