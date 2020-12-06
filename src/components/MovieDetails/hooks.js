import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    marginTop: theme.spacing(8),
  },
  sectionTitle: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  overview: {
    display: 'flex',
    alignItems: 'center',
  },
  listItem: {
    display: `${window.screen.width >= 600 ? 'flex' : 'inline-block'}`,
    marginBottom: theme.spacing(1),
  },
  listTitle: {
    width: 90,
    marginRight: theme.spacing(2),
  },
  image: {
    width: '100%',
  },
  genresItem: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  rating: {
    display: 'flex',
    '& > *': {
      marginTop: theme.spacing(0.5),
    },
  },
}));

export default useStyles;
