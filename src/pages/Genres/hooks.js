import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
