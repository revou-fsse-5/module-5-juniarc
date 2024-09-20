import { Dispatch } from 'redux';
import api from '../../network/api';
import { SigninType } from '../../types/type';
import {
	endLoadingActionCreator,
	EndLoadingActionType,
	startLoadingActionCreator,
	StartLoadingActionType,
} from '../isLoading/action';
import { deleteUserSessionActionCreator, DeleteUserSessionActionType, getUserWithSession } from '../user/action';

const ActionType = {
	SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT'
} as const;

interface SigninActionType {
	type: typeof ActionType.SIGN_IN;
	payload: {
		accessToken: string | null;
	};
}

interface SignoutActionType {
    type: typeof ActionType.SIGN_OUT,
}

function signinActionCreator(accessToken: string | null): SigninActionType {
	return {
		type: ActionType.SIGN_IN,
		payload: {
			accessToken,
		},
	};
}

function signoutActionCreator(): SignoutActionType {
    return {
        type: ActionType.SIGN_OUT
    }
}

function signin({ email, password }: SigninType) {
	return async (dispatch: Dispatch<SigninActionType | StartLoadingActionType | EndLoadingActionType>) => {
		try {
			dispatch(startLoadingActionCreator());
			const signin = await api.signin({ email, password });
			localStorage.setItem('accessToken', signin.access_token);
			dispatch(signinActionCreator(signin.access_token));
			await api.getUserWithSession();
			return true;
		} catch (error) {
			alert(error);
			return false
		} finally {
			dispatch(endLoadingActionCreator());
		}
	};
}

function signout() {
    return (dispatch: Dispatch<DeleteUserSessionActionType | SignoutActionType>) => {
        try {
            localStorage.removeItem('accessToken');
			dispatch(deleteUserSessionActionCreator())
            dispatch(signoutActionCreator())
        } catch (error) {
            alert(error)
        }
    }
}

export type AuthActionType = SigninActionType | SignoutActionType;
export {
	ActionType,
	signinActionCreator,
    signoutActionCreator,
	signin,
    signout,
};
