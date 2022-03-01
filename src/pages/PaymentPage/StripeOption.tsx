
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import stripe from 'images/stripe.svg';
import { useStyles } from 'pages/PaymentPage/styles';

export default function StripeOption({ selected, handleChange }: {selected: string, handleChange: (data: string) => void}): JSX.Element {
  const classes = useStyles();

  return (
    <Card
      onClick={() => handleChange('stripe')}
      style={{ backgroundColor: `${selected === 'stripe' ? '#f2f2f2' : 'white'}` }}
      className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography align="center" paragraph variant="h3">
          Stripe
        </Typography>
        <Box display="flex" justifyContent="space-around">
          <Box className={classes.img}>
            <img src={stripe} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}