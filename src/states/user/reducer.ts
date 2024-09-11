import { ActionType, UserActionType } from "./action";
import { UserType } from "../../types/type";
import { AnyAction } from "redux";

function userReducer(user: UserType | undefined= {}, action: UserActionType | AnyAction) {
    switch(action.type){
        case ActionType.REGISTER:
            return user;
        case ActionType.GET_USER_WITH_SESSION:
            return action.payload.user;
        case ActionType.DELETE_USER_SESSION:
            return {};
        default:
            return user
    }
}

export default userReducer;