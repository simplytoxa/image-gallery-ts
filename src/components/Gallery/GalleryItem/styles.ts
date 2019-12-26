import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    galleryItem: {
      position: 'relative',
      display: 'flex',
      '&:hover $iconButton': {
        opacity: 1,
        zIndex: 2,
        cursor: 'pointer',
      },
    },
    titleContainer: {
      position: 'absolute',
      bottom: 0,
      height: '50px',
      background: 'black',
      opacity: 0.6,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: '0 5px',
    },
    title: {
      textAlign: 'center',
      color: '#fff',
    },
    image: {
      display: 'block',
      maxWidth: '100%',
      objectFit: 'cover',
      transition: 'all 0.2s ease-in-out',
      boxShadow: `1px 2px 1px rgba(0,0,0,0.12),
              2px 4px 2px rgba(0,0,0,0.12),
              4px 8px 4px rgba(0,0,0,0.12),
              5px 16px 8px rgba(0,0,0,0.12),
              8px 32px 16px rgba(0,0,0,0.12)`,
      background: 'lightgrey',
      '&:hover': {
        '-webkit-filter': 'sepia(90%)',
      },
    },
    iconButton: {
      position: 'absolute',
      right: 10,
      top: 10,
      opacity: 0,
      color: 'red',
      transition: '0.3s all ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    '@supports (display: grid)': {
      galleryItem: {
        margin: 0,
      },
    },
  })
);

export default useStyles;
