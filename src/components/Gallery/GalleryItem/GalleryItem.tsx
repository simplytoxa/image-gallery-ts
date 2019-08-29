import React from 'react';
import './GalleryItem.scss';
import Action from "../../../UI/Action/Action";
import Image from '../../../models/Image';

interface Props {
  removeItem: (name: string) => void,
  item: Image
}

const GalleryItem = ({ item, removeItem }: Props) => (
  <li className="Gallery-item">
    <img className="Gallery-image" src={item.path} alt="Smth from gallery" />
    <Action
      icon="trash"
      className="Gallery-item__remove"
      onClick={removeItem}
    />
    <span className="text">{item.name}</span>
  </li>
);

export default GalleryItem;
