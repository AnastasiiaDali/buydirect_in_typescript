
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import paypal from 'images/paypal.svg';
import { useStyles } from 'pages/PaymentPage/styles';

export default function PaypalOption({ selected, handleChange }: {selected: string, handleChange: (data: string) => void}): JSX.Element {
  const classes = useStyles();

  return (
    <Card
      onClick={() => handleChange('paypal')}
      style={{ backgroundColor: `${selected === 'paypal' ? '#f2f2f2' : 'white'}` }}
      className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography align="center" paragraph variant="h3">
          Paypal
        </Typography>
        <Box display="flex" justifyContent="space-around">
          <Box className={classes.img}>
            <img src={paypal} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}