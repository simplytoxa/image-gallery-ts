import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Gallery from '../../components/Gallery/Gallery';
import { Dispatch } from 'redux';
import * as actions from '../../store/actions';
import Image from '../../models/Image';

export interface GalleryContainerProps {
  images: Image[];
  isModalOpen: boolean;
  toggleModal: (isModalOpen: boolean) => void;
  fetchImages: () => void;
  onFileDrop: () => void;
  removeItem: (img: Image) => void;
  ready: boolean;
}

const GalleryContainer = (props: GalleryContainerProps) => {
  const { fetchImages } = props;
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return <Gallery {...props} />;
};

const mapState2Props = state => ({
  images: state.gallery.images,
  isModalOpen: state.gallery.isModalOpen,
  ready: state.gallery.ready,
});

const mapDispatch2Props = (dispatch: Dispatch) => ({
  toggleModal: (isModalOpen: boolean) => dispatch(actions.toggleModal(isModalOpen)),
  fetchImages: () => dispatch(actions.fetchImagesInit()),
  onFileDrop: (file: File) => dispatch(actions.fileDrop(file)),
  removeItem: (id: string) => dispatch(actions.removeImageInit(id)),
});

export default connect(
  mapState2Props,
  mapDispatch2Props
)(GalleryContainer);
