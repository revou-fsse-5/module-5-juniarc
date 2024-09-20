import { Dispatch } from "redux";
import api from "../../network/api";
import { ProductItemType } from "../../types/type";
import { startLoadingActionCreator, endLoadingActionCreator, StartLoadingActionType, EndLoadingActionType } from "../isLoading/action";

const ActionType = {
    GET_ALL_PRODUCTS : "GET_ALL_PRODUCTS",
    GET_ALL_PRODUCTS_BY_CATEGORY: "GET_ALL_PRODUCTS_BY_CATEGORY"
}

interface GetAllProductsActionType {
    type: typeof ActionType.GET_ALL_PRODUCTS,
    payload: {
        products: ProductItemType[]
    }
}

interface GetAllProductsByCategoryActionType {
    type: typeof ActionType.GET_ALL_PRODUCTS_BY_CATEGORY,
    payload: {
        products: ProductItemType[]
    }
}

function getAllProductsActionCreator(products: ProductItemType[]) : GetAllProductsActionType {
    return {
        type: ActionType.GET_ALL_PRODUCTS,
        payload: {
            products
        }
    }
}

function getAllProductsByCategoryActionCreator(products: ProductItemType[]) : GetAllProductsByCategoryActionType {
    return {
        type: ActionType.GET_ALL_PRODUCTS,
        payload: {
            products
        }
    }
}

function getAllProducts() {
    return async (dispatch: Dispatch<StartLoadingActionType | EndLoadingActionType | GetAllProductsActionType>) => {
        try {
            dispatch(startLoadingActionCreator())
            const products = await api.getAllProducts();
            dispatch(getAllProductsActionCreator(products));
        } catch (error) {
            alert(error)
        } finally {
            dispatch(endLoadingActionCreator())
        }
    }
}

function getAllProductsByCategory(id: string) {
    return async (dispatch: Dispatch<StartLoadingActionType | EndLoadingActionType | GetAllProductsByCategoryActionType>) => {
        try {
            dispatch(startLoadingActionCreator());
            const products = await api.getAllProductsByCategory(id);
            dispatch(getAllProductsByCategoryActionCreator(products));
        } catch (error) {
            alert(error);
        } finally {
            dispatch(endLoadingActionCreator())
        }
    }
}

export type GetAllProductsActionTypes = GetAllProductsActionType | GetAllProductsByCategoryActionType

export {
    ActionType,
    getAllProductsActionCreator,
    getAllProductsByCategoryActionCreator,
    getAllProducts,
    getAllProductsByCategory
}