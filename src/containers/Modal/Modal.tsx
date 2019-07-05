import * as React from "react";
import { connect } from "react-redux";
import Modal from "../../UI/Modal/Modal";
import SendForm from "../../components/SendForm/SendForm";
import * as actions from "../../store/actions";
import { ToolbarAction } from "../../store/actions/toolbar/toolbar";
import { Dispatch } from "redux";

export interface ModalProps {}

class ModalContainer extends React.Component<ModalProps, any> {
  render() {
    return (
      <>
        {this.props.isModalOpen && (
          <Modal onClose={this.props.toggleModal}>
            <SendForm
              closeModal={this.props.toggleModal}
              uploadImage={this.props.uploadImage}
              file={this.props.file}
            />
          </Modal>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isModalOpen: state.gallery.isModalOpen,
  file: state.gallery.file
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleModal: (isModalOpen: boolean): ToolbarAction => dispatch(actions.toggleModal(isModalOpen)),
  uploadImage: (formData: FormData) => dispatch(actions.uploadImageInit(formData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
