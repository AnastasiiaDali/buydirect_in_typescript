import React from 'react';
import { useAppSelector, useAppDispatch } from 'store/hook';
import { decreaseQuantity, addToCart } from 'store/slices/cart/cartSlice';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/core/styles';
import { White } from 'theme';
import { Product } from 'types';

const useStyles = makeStyles((theme) => ({
  counter: {
    display: 'flex',
    width: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.typography.body1.fontSize
  },
  icon: {
    fill: White
  }
}));

export default function Counter({ product }: { product: Product }) {
  const classes = useStyles();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const itemIndex = cartItems.findIndex((item: Product) => item.id === product.id);
  const productQuantity =
    useAppSelector((state) => state.cart.cartItems[itemIndex]?.itemQuantity) || 0;

  const dispatch = useAppDispatch();

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Box display="flex">
      <Button variant="contained" onClick={handleDecreaseQuantity}>
        <RemoveIcon className={classes.icon} />
      </Button>
      <Box className={classes.counter}>{productQuantity}</Box>
      <Button variant="contained" onClick={handleAddToCart}>
        <AddIcon className={classes.icon} />
      </Button>
    </Box>
  );
}
