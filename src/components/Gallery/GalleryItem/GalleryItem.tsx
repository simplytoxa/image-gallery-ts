import React from 'react';
import './GalleryItem.scss';
import Action from "../../../UI/Action/Action";
import Image from '../../../models/Image';
import { Typography } from '@material-ui/core';

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
    <div className="title-container">
      <Typography className="title" noWrap title={item.name}>{item.name}</Typography>
    </div>
  </li>
);

export default GalleryItem;
