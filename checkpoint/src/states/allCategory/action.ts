import { Dispatch } from "redux";
import api from "../../network/api";
import { CategoryType } from "../../types/type";

export const ActionType = {
    GET_ALL_CATEGORY: "GET_ALL_CATEGORY"
} as const

export interface GetAllCategoryActionType {
    type: typeof ActionType.GET_ALL_CATEGORY,
    payload: {
        categories?: CategoryType[]
    }
}

export function getAllCategoryActionCreator(categories: CategoryType[]) : GetAllCategoryActionType {
    return {
        type: ActionType.GET_ALL_CATEGORY,
        payload: {
            categories
        }
    }
}

export function getAllCategory() {
    return async (dispatch: Dispatch<GetAllCategoryActionType>) => {
        try {
            const categories = await api.getAllCategory();
            dispatch(getAllCategoryActionCreator(categories))
        } catch (error) {
            console.log(error)
        }
    }
}