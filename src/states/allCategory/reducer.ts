import { AnyAction } from "redux";
import { ActionType, GetAllCategoryActionType } from "./action";
import { CategoryType } from "../../types/type";

function allCategoryReducer(categories: CategoryType[] = [], action: GetAllCategoryActionType | AnyAction) : CategoryType[] {
    switch(action.type) {
        case ActionType.GET_ALL_CATEGORY:
            return action.payload.categories
        default:
            return categories;
    }
}

export default allCategoryReducer