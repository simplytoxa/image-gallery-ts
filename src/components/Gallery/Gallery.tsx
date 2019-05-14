import React, { PureComponent } from 'react';
import GalleryItem from "./GalleryItem/GalleryItem";
import './Gallery.css';
import Dropzone from "../../components/Dropzone/Dropzone";
import PropTypes from 'prop-types';
import NoData from "../NoData/NoData";
import Spinner from "../../UI/Spinner/Spinner";

class Gallery extends PureComponent {
  static propTypes = {
    toggleModal: PropTypes.func,
    fetchImages: PropTypes.func,
    onFileDrop: PropTypes.func,
    images: PropTypes.array
  };

  state = {
    ready: false
  };

  componentDidMount() {
    this.props.fetchImages().then(() => {
      this.setState({ ready: true })
    });
  }

  onDrop = file => {
    this.props.onFileDrop(file);
    this.props.toggleModal();
  };

  render() {
    const mapedImages = this.props.images.map(item => (
      <GalleryItem fetchImages={this.props.fetchImages} item={item} key={item.name} />)
    );

    return (
        <Dropzone onDrop={this.onDrop}>
          <div className="Gallery-container">
            {!this.state.ready && <Spinner />}
            {
              this.state.ready &&
                <ul className="Gallery">
                  {mapedImages}
                </ul>
            }
            {this.state.ready && !this.props.images.length && <NoData />}
          </div>
        </Dropzone>
    );
  }
}

export default Gallery;