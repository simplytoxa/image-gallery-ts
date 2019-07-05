import React, { PureComponent } from 'react';
import GalleryItem from "./GalleryItem/GalleryItem";
import './Gallery.css';
import Dropzone from "../Dropzone/Dropzone.component";
import NoData from "../NoData/NoData";
import Spinner from "../../UI/Spinner/Spinner";
import { GalleryContainerProps } from '../../containers/Gallery/Gallery.container';
import Image from '../../models/Image';

class Gallery extends PureComponent<GalleryContainerProps> {
  onDrop = file => {
    this.props.onFileDrop(file);
    this.props.toggleModal(this.props.isModalOpen);
  };

  handleRemove = (name: string) => {
    return () => this.props.removeItem(name);
  };

  render() {
    const mapedImages = this.props.images.map((item: Image) => (
      <GalleryItem item={item} key={item.name} removeItem={this.handleRemove(item.name)} />)
    );

    return (
        <Dropzone onDrop={this.props.onFileDrop}>
          <div className="Gallery-container">
            {!this.props.ready && <Spinner />}
            {
              this.props.ready &&
                <ul className="Gallery">
                  {mapedImages}
                </ul>
            }
            {this.props.ready && !this.props.images.length && <NoData />}
          </div>
        </Dropzone>
    );
  }
}

export default Gallery;