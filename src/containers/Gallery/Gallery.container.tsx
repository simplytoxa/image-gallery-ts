import * as React from "react";
import { connect } from "react-redux";
import Gallery from "../../components/Gallery/Gallery";
import { Dispatch } from "redux";
import * as actions from "../../store/actions";
import Image from "../../models/Image";

export interface GalleryContainerProps {
  images: Image[],
  isModalOpen: boolean,
  toggleModal: (isModalOpen: boolean) => void,
  fetchImages: () => void,
  onFileDrop: () => void,
  removeItem: (name: string) => void
}

class GalleryContainer extends React.Component<GalleryContainerProps, any> {

  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    return (
      <Gallery {...this.props} />
    );
  }
}

const mapState2Props = (state) => ({
  images: state.gallery.images,
  isModalOpen: state.gallery.isModalOpen,
  ready: state.gallery.ready
});

const mapDispatch2Props = (dispatch: Dispatch) => ({
  toggleModal: (isModalOpen: boolean) => dispatch(actions.toggleModal(isModalOpen)),
  fetchImages: () => dispatch(actions.fetchImagesInit()),
  onFileDrop: (file: File) => dispatch(actions.fileDrop(file)),
  removeItem: (name: string) => dispatch(actions.removeImageInit(name))
});

export default connect(mapState2Props, mapDispatch2Props)(GalleryContainer);
