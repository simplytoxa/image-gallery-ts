import React, { useEffect } from 'react';
import GalleryItem from './GalleryItem/GalleryItem';
import './Gallery.scss';
import Dropzone from '../Dropzone/Dropzone.component';
import NoData from '../shared/NoData/NoData';
import Spinner from '../shared/Spinner/Spinner';
import Image from '../../models/Image';

interface Props {
  images: Image[];
  isModalOpen: boolean;
  toggleModal: (isModalOpen: boolean) => void;
  fetchImages: () => void;
  onFileDrop: () => void;
  removeItem: (img: Image) => void;
  ready: boolean;
}

const Gallery = (props: Props): JSX.Element | null => {
  const { fetchImages } = props;
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);
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
