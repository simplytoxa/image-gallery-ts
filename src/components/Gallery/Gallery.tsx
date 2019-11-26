import React from 'react';
import GalleryItem from './GalleryItem/GalleryItem';
import './Gallery.scss';
import Dropzone from '../Dropzone/Dropzone.component';
import NoData from '../NoData/NoData';
import Spinner from '../../UI/Spinner/Spinner';
import { GalleryContainerProps } from '../../containers/Gallery/Gallery.container';
import Image from '../../models/Image';

const Gallery = (props: GalleryContainerProps) => {
  const handleRemove = (img: Image) => () => props.removeItem(img);

  const mapedImages = props.images.map((img: Image) => (
    <GalleryItem item={img} key={img.name} removeItem={handleRemove(img)} />
  ));

  return (
    <Dropzone onDrop={props.onFileDrop}>
      <div className="Gallery-container">
        {!props.ready && <Spinner />}
        {props.ready && <ul className="Gallery">{mapedImages}</ul>}
        {props.ready && !props.images.length && <NoData />}
      </div>
    </Dropzone>
  );
};

export default Gallery;
