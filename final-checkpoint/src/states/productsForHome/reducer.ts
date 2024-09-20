import { AnyAction } from 'redux';
import { ActionType, ProductsByCategoryForHomeActionType } from './action';
import { ProductsByCategoryForHomeType } from './type';

function ProductsByCategoryForHomeReducer(
  products: ProductsByCategoryForHomeType = { category1: [], category2: [] },
  action: ProductsByCategoryForHomeActionType | AnyAction
): ProductsByCategoryForHomeType {
  switch (action.type) {
    case ActionType.RECEIVE_PRODUCTS_BY_CATEGORY_1_FOR_HOME:
      return {
        ...products,
        category1: action.payload.products,
      };
    case ActionType.RECEIVE_PRODUCTS_BY_CATEGORY_2_FOR_HOME:
      return {
        ...products,
        category2: action.payload.products,
      };
    default:
      return products;
  }
}

export default ProductsByCategoryForHomeReducer;
