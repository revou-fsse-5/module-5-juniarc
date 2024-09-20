import { AnyAction } from "redux";
import { ActionType, GetProductDetailActionType } from "./action";
import { ProductDetailType } from "../../types/type";

function productDetailReducer(product: ProductDetailType = {} , action: GetProductDetailActionType | AnyAction) {
    switch(action.type) {
        case ActionType.GET_PRODUCT_DETAIL:
            return action.payload.product;
        default:
            return product;
    }
}

export default productDetailReducer;