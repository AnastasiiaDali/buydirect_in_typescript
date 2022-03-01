import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import creditCard from 'images/creditCard.svg';
import master from 'images/master.svg';
import visa from 'images/visa.svg';
import american from 'images/american.svg';
import { useStyles } from 'pages/PaymentPage/styles';

export default function CreditCardOption({ selected, handleChange }: { selected: string, handleChange: (data: string) => void }) {
  const classes = useStyles();

  return (
    <Card
      onClick={() => handleChange('creditCard')}
      style={{ backgroundColor: `${selected === 'creditCard' ? '#f2f2f2' : 'white'}` }}
      className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography align="center" paragraph variant="h3">
          Credit cart
        </Typography>
        <Box display="flex" justifyContent="space-around">
          <Box className={classes.img} display={{ xs: 'block', lg: 'none' }}>
            <img src={creditCard} />
          </Box>
          <Box className={classes.img} display={{ xs: 'none', lg: 'block' }}>
            <img src={master} />
          </Box>
          <Box className={classes.img} display={{ xs: 'none', lg: 'block' }}>
            <img src={visa} className={classes.color} />
          </Box>
          <Box className={classes.img} display={{ xs: 'none', lg: 'block' }}>
            <img src={american} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
