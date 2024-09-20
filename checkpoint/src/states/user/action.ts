import { UserType, RegisterType } from '../../types/type';
import {
	startLoadingActionCreator,
	endLoadingActionCreator,
	StartLoadingActionType,
	EndLoadingActionType,
} from '../isLoading/action';
import api from '../../network/api';
import { Dispatch } from 'redux';

const ActionType = {
	GET_USER_WITH_SESSION: 'GET_USER_WITH_SESSION',
	REGISTER: 'REGISTER',
    DELETE_USER_SESSION: 'DELETE_USER_SESSION'
} as const;

interface RegisterActionType {
	type: typeof ActionType.REGISTER;
}

interface GetUserWithSessionActionType {
	type: typeof ActionType.GET_USER_WITH_SESSION;
	payload: {
		user: UserType;
	};
}

export interface DeleteUserSessionActionType {
    type: typeof ActionType.DELETE_USER_SESSION
}

function registerActionCreator(): RegisterActionType {
	return {
		type: ActionType.REGISTER,
	};
}

function getUserWithSessionActionCreator(
	user: UserType
): GetUserWithSessionActionType {
	return {
		type: ActionType.GET_USER_WITH_SESSION,
		payload: {
			user,
		},
	};
}

function deleteUserSessionActionCreator(): DeleteUserSessionActionType {
    return {
        type: ActionType.DELETE_USER_SESSION
    }
}

function register({ name, email, password, avatar }: RegisterType) {
	return async (dispatch: Dispatch<RegisterActionType | StartLoadingActionType | EndLoadingActionType>) => {
		try {
			dispatch(startLoadingActionCreator());
			await api.register({ name, email, password, avatar });
			dispatch(registerActionCreator());

			return true;
		} catch (error) {
			console.log(error);
			alert(error);
			return false;
		} finally {
			dispatch(endLoadingActionCreator());
		}
	};
}

function getUserWithSession() {
	return async (dispatch: Dispatch<GetUserWithSessionActionType>) => {
		const accessToken = localStorage.getItem('accessToken');

		if (accessToken !== null) {
			try {
				const user = await api.getUserWithSession();
				dispatch(getUserWithSessionActionCreator(user));
			} catch (error) {
				alert(error);
			}
		}

        return;
	};
}

export type UserActionType = RegisterActionType | GetUserWithSessionActionType | DeleteUserSessionActionType;

export {
	ActionType,
	register,
	getUserWithSession,
	getUserWithSessionActionCreator,
	registerActionCreator,
    deleteUserSessionActionCreator
};
