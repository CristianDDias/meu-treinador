import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  message: {
    display: 'flex',
    flexBasis: 0,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
