import React, { useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import Modal from '../../components/shared/Modal/Modal';
import SendForm from '../../components/SendForm/SendForm';
import * as actions from '../../store/actions';
import { Dispatch } from 'redux';

export interface ModalProps {
  toggleModal: () => void;
  uploadImage: () => void;
  fileDrop: () => void;
  file: File;
  isModalOpen: boolean;
}

const ModalContainer: FunctionComponent<ModalProps> = (props: ModalProps) => {
  const root = document.createElement('div');
  document.body.appendChild(root);

  useEffect(() => () => {
    document.body.removeChild(root);
  });

  return (
    <>
      {props.isModalOpen && (
        <Modal onClose={props.toggleModal} root={document.body}>
          <SendForm
            closeModal={props.toggleModal}
            uploadImage={props.uploadImage}
            file={props.file}
            handleFileChange={props.fileDrop}
          />
        </Modal>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  isModalOpen: state.gallery.isModalOpen,
  file: state.gallery.file,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleModal: (isModalOpen: boolean) => dispatch(actions.toggleModal(isModalOpen)),
  uploadImage: (formData: FormData) => dispatch(actions.uploadImageInit(formData)),
  fileDrop: (file: File) => dispatch(actions.fileDrop(file)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
