import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import ProductsByCategoryForHomeReducer from './productsForHome/reducer';
import isLoadingReducer from './isLoading/reducer';
import chartReducer from './chart/reducer';
import productDetailReducer from './productDetail/reducer';
import productsReducer from './products/reducer';
import categoryReducer from './category/reducer';
import authReducer from './auth/reducer';
import userReducer from './user/reducer';
import allCategoryReducer from './allCategory/reducer';

const store = configureStore({
  reducer: {
    productsByCategoryForHome: ProductsByCategoryForHomeReducer,
    isLoading: isLoadingReducer,
    chart: chartReducer,
    productDetail: productDetailReducer,
    products: productsReducer,
    category: categoryReducer,
    accessToken: authReducer,
    user: userReducer,
    categories: allCategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
