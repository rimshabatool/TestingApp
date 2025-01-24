import {createSlice} from '@reduxjs/toolkit';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  text: number;
  newType:string
}

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer;
