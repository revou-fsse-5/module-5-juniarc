import {
  ActionType,
  StartLoadingActionType,
  EndLoadingActionType,
} from './action';

function isLoadingReducer(
  isLoading: boolean = false,
  action: StartLoadingActionType | EndLoadingActionType
) {
  switch (action.type) {
    case ActionType.START_LOADING:
      return true;
    case ActionType.END_LOADING:
      return false;
    default:
      return isLoading;
  }
}

export default isLoadingReducer;
