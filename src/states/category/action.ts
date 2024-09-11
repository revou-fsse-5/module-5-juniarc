import { Dispatch } from "redux";
import api from "../../network/api";
import { CategoryType } from "../../types/type";

const ActionType = {
    GET_CATEGORY: "GET_CATEGORY",
} as const

export interface GetCategoryActionType {
    type: typeof ActionType.GET_CATEGORY,
    payload: {
        category: CategoryType
    }
}

function getCategoryActionCreator(category: CategoryType) : GetCategoryActionType {
    return {
        type: ActionType.GET_CATEGORY,
        payload: {
            category
        }
    }
}

function getCategory(id?: string) {
    return async (dispatch: Dispatch<GetCategoryActionType>) => {
        try {
            const category = await api.getCategory(id);
            dispatch(getCategoryActionCreator(category));
        } catch (error) {
            alert(error);
        }
    }
}

export {
    ActionType,
    getCategory,
    getCategoryActionCreator
}
