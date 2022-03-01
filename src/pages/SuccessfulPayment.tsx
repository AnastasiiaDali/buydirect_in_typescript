import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { PrimaryBlue } from 'theme';

import successfulPayment from 'images/successfulPayment.png';

const useStyles = makeStyles(() => ({
  container: {
    padding: '100px 16px 0',
    maxWidth: '1280px',
    minHeight: 'calc(100vh - 100px)',
    margin: '30px auto 10px',
    display: 'flex',
    gridGap: '24px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: '200px',
    height: '200px'
  },
  link: {
    color: PrimaryBlue,
    width: "200px",
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

export default function SuccessfulPayment(): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography paragraph variant="h2" display="block" align="center">
        Congratulations! Your order has been placed!
      </Typography>

      <Box className={classes.img}>
        <img width="100%" src={successfulPayment} />
      </Box>

      <Typography className={classes.link} component={Link} to={'/'}>
        Go to home page
      </Typography>
    </Box>
  );
}
