import React from 'react';
import axios from '../../../axios-instance';
import './GalleryItem.css';
import Action from "../../../UI/Action/Action";

const GalleryItem = (props) => {
  let { item } = props;
  const handleRemove = () => {
    axios.post('/remove', { name: item.name }).then(res => {
      props.fetchImages();
    });
  };

  return (
    <li className="Gallery-item">
      <div className="Gallery-item__container">
        <img
          className="Gallery-image"
          src={ item.path }
          alt="Smth from gallery"/>
        <Action icon="trash" className="Gallery-item__remove" onClick={handleRemove} />
        <span className="text">{ item.name }</span>
      </div>
    </li>
  );
};

export default GalleryItem;
