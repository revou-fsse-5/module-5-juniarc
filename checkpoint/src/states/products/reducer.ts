import { AnyAction } from 'redux';
import { ActionType, GetAllProductsActionTypes } from './action';
import { ProductItemType } from '../../types/type';

function productsReducer(
	products: ProductItemType[] = [],
	action: GetAllProductsActionTypes | AnyAction
) {
	switch (action.type) {
		case ActionType.GET_ALL_PRODUCTS:
			return action.payload.products;
		case ActionType.GET_ALL_PRODUCTS_BY_CATEGORY:
			return action.payload.products;
		default:
			return products;
	}
}

export default productsReducer;
