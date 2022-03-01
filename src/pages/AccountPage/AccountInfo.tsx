
import { useAppSelector } from 'store/hook';
import { accountData } from 'data/accountData';
import { Data } from 'types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { useStyles } from 'pages/AccountPage/styles';


export default function AccountInfo(): JSX.Element {
  const classes = useStyles();
  const { billingAddress, shippingAddress, storeCredit } = accountData;
  const user = useAppSelector((state) => state.account.user);
  const { firstName } = user as Data;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography paragraph variant="h3">
          Account
        </Typography>
        <Box className={classes.cardContent}>
          <Typography variant="body1">Account Name: {firstName}</Typography>
          <Divider flexItem />
          <Typography variant="body1">Billing Address:</Typography>
          <Typography variant="body1">{billingAddress}</Typography>
          <Divider flexItem />
          <Typography variant="body1">Shipping Address:</Typography>
          <Typography variant="body1">{shippingAddress}</Typography>
          <Divider flexItem />
          <Typography variant="body1">Store Credit: </Typography>
          <Typography variant="body1">{storeCredit}</Typography>
          <Divider flexItem />
        </Box>
      </CardContent>
      <Button className={classes.btn} fullWidth variant="text">
        Edit Account Info
      </Button>
    </Card>
  );
}
