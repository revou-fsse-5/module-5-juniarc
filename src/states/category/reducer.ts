import { AnyAction } from "redux";
import { ActionType, GetCategoryActionType } from "./action";
import { CategoryType } from "../../types/type";

function categoryReducer(category: CategoryType = {} , action: GetCategoryActionType | AnyAction) {
    switch(action.type){
        case ActionType.GET_CATEGORY:
            return action.payload.category;
        default:
            return category;
    }
}

export default categoryReducer