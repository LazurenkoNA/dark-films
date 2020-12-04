import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  sectionTitle: {
    margin: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
