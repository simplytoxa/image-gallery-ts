import React, { MouseEvent } from 'react';
import Image from '../../../models/Image';
import { Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import useStyles from './styles';

interface Props {
  removeItem: (event: MouseEvent<HTMLButtonElement>) => void;
  item: Image;
}

const GalleryItem = ({ item, removeItem }: Props) => {
  const classes = useStyles();
  return (
    <li className={classes.galleryItem}>
      <img className={classes.image} src={item.path} alt="Smth from gallery" />
      <IconButton aria-label="delete" className={classes.iconButton} onClick={removeItem}>
        <DeleteIcon />
      </IconButton>
      <div className={classes.titleContainer}>
        <Typography className={classes.title} noWrap title={item.name}>
          {item.name}
        </Typography>
      </div>
    </li>
  );
};

export default GalleryItem;
