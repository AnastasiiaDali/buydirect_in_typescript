import { createSlice } from '@reduxjs/toolkit';
// import type { RootState } from 'index';
import { Product } from 'types';

interface CartState {
  cartItems: any;
  cartTotalQuantity: number;
  cartTotaAmount: number;
}

const initialState: CartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotaAmount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item: Product) => item.id === action.payload.id);
      state.cartTotalQuantity += action.payload.itemQuantityTemp || 1;
      state.cartTotaAmount += (action.payload.itemQuantityTemp || 1) * action.payload.price;

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].itemQuantity += action.payload.itemQuantityTemp || 1;
      } else {
        const tempProduct = {
          ...action.payload,
          itemQuantity: action.payload.itemQuantityTemp || 1
        };
        delete tempProduct.itemQuantityTemp;
        state.cartItems.push(tempProduct);
      }
    },
    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item: Product) => item.id === action.payload.id);
      state.cartTotaAmount = state.cartTotaAmount - state.cartItems[itemIndex].price;
      state.cartTotalQuantity -= state.cartItems[itemIndex].itemQuantity;
      const nextCartItems = state.cartItems.filter(
        (cartItem: Product) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem: Product) => cartItem.id === action.payload.id
      );
      state.cartTotalQuantity -= 1;

      if (state.cartItems[itemIndex].itemQuantity > 1) {
        state.cartItems[itemIndex].itemQuantity -= 1;
        state.cartTotaAmount = state.cartTotaAmount - state.cartItems[itemIndex].price;
      } else if (state.cartItems[itemIndex].itemQuantity === 1) {
        state.cartTotaAmount = state.cartTotaAmount - state.cartItems[itemIndex].price;
        const nextCartItems = state.cartItems.filter(
          (cartItem: Product) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotaAmount = 0;
    }
  }
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
