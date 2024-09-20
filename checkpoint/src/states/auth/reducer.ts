import { AnyAction } from "redux";
import { ActionType, AuthActionType } from "./action";

function authReducer(accessToken: string = '', action: AuthActionType | AnyAction) {
    switch(action.type){
        case ActionType.SIGN_IN:
            return action.payload.accessToken
        case ActionType.SIGN_OUT:
            return '';
        default:
            return accessToken
    }
}

export default authReducer