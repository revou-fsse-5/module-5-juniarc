import { ProductItemType } from '../../types/type';
import api from '../../network/api';
import {
  startLoadingActionCreator,
  endLoadingActionCreator,
  StartLoadingActionType,
  EndLoadingActionType,
} from '../isLoading/action';
import { getAllCategory, getAllCategoryActionCreator, GetAllCategoryActionType } from '../allCategory/action';
import { Dispatch } from 'redux';

interface ReceiveProductsByCategory1ForHomeActionType {
  type: typeof ActionType.RECEIVE_PRODUCTS_BY_CATEGORY_1_FOR_HOME;
  payload: {
    products: ProductItemType[];
  };
}

interface ReceiveProductsByCategory2ForHomeActionType {
  type: typeof ActionType.RECEIVE_PRODUCTS_BY_CATEGORY_2_FOR_HOME;
  payload: {
    products: ProductItemType[];
  };
}

const ActionType = {
  RECEIVE_PRODUCTS_BY_CATEGORY_1_FOR_HOME:
    'RECEIVE_PRODUCTS_BY_CATEGORY_1_FOR_HOME',
  RECEIVE_PRODUCTS_BY_CATEGORY_2_FOR_HOME:
    'RECEIVE_PRODUCTS_BY_CATEGORY_2_FOR_HOME',
} as const;

function receiveProductsByCategory1ForHomeActionCreator(
  products: ProductItemType[]
): ReceiveProductsByCategory1ForHomeActionType {
  return {
    type: ActionType.RECEIVE_PRODUCTS_BY_CATEGORY_1_FOR_HOME,
    payload: {
      products,
    },
  };
}

function receiveProductsByCategory2ForHomeActionCreator(
  products: ProductItemType[]
): ReceiveProductsByCategory2ForHomeActionType {
  return {
    type: ActionType.RECEIVE_PRODUCTS_BY_CATEGORY_2_FOR_HOME,
    payload: {
      products,
    },
  };
}

function asyncRecieveProductsByCategory1ForHome() {
  return async (dispatch: Dispatch<GetAllCategoryActionType | StartLoadingActionType | EndLoadingActionType | ReceiveProductsByCategory1ForHomeActionType>) => {
    try {
      dispatch(startLoadingActionCreator());
      const categories = await api.getAllCategory();
      const products = await api.getAllProductsByCategoryForHome(categories[0].id);
      dispatch(getAllCategoryActionCreator(categories))
      dispatch(receiveProductsByCategory1ForHomeActionCreator(products));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(endLoadingActionCreator());
    }
  };
}

function asyncRecieveProductsByCategory2ForHome() {
  return async (dispatch: Dispatch<GetAllCategoryActionType | StartLoadingActionType | EndLoadingActionType | ReceiveProductsByCategory2ForHomeActionType>) => {
    try {
      dispatch(startLoadingActionCreator());
      const categories = await api.getAllCategory();
      const products = await api.getAllProductsByCategoryForHome(categories[1].id);
      dispatch(getAllCategoryActionCreator(categories))
      dispatch(receiveProductsByCategory2ForHomeActionCreator(products));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(endLoadingActionCreator());
    }
  };
}

export type ProductsByCategoryForHomeActionType =
  | ReceiveProductsByCategory1ForHomeActionType
  | ReceiveProductsByCategory2ForHomeActionType;

export {
  ActionType,
  receiveProductsByCategory1ForHomeActionCreator,
  receiveProductsByCategory2ForHomeActionCreator,
  asyncRecieveProductsByCategory1ForHome,
  asyncRecieveProductsByCategory2ForHome,
};
