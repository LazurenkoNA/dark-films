import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  sectionTitle: {
    margin: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  rootItem: {
    maxWidth: 225,
  },
  cardMedia: {
    height: 270,
  },
}));

export default useStyles;
