import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 225,
  },
  cardMedia: {
    height: 270,
  },
  cardBadge: {
    '& .MuiBadge-anchorOriginTopLeftRectangle': {
      top: theme.spacing(2.8),
      left: theme.spacing(1),
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.badge,
      pointerEvents: 'none',
    },
  },
  cardInfo: {
    position: 'absolute',
    top: theme.spacing(0),
    right: theme.spacing(0),
    zIndex: 1,
    color: 'white',
  },
}));

export default useStyles;
