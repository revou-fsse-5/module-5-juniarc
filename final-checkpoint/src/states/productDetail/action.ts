import { Dispatch } from 'redux';
import api from '../../network/api';
import { ProductDetailType } from '../../types/type';
import { startLoadingActionCreator, endLoadingActionCreator, StartLoadingActionType, EndLoadingActionType } from '../isLoading/action';

const ActionType = {
	GET_PRODUCT_DETAIL: 'GET_PRODUCT_DETAIL',
};

export interface GetProductDetailActionType {
	type: typeof ActionType.GET_PRODUCT_DETAIL;
	payload: {
		product: ProductDetailType;
	};
}

function getProductDetailActionCreator(
	product: ProductDetailType
): GetProductDetailActionType {
	return {
		type: ActionType.GET_PRODUCT_DETAIL,
		payload: {
			product,
		},
	};
}

function getProductDetail(id: string | string[]) {
    return async (dispatch: Dispatch<StartLoadingActionType | EndLoadingActionType | GetProductDetailActionType>) => {
        try {
            dispatch(startLoadingActionCreator());
            const product = await api.getProductDetail(id);
            dispatch(getProductDetailActionCreator(product));
        } catch (error) {
            alert(error)
        } finally {
            dispatch(endLoadingActionCreator());
        }
    }
}

export {
    ActionType,
    getProductDetailActionCreator,
    getProductDetail
}
