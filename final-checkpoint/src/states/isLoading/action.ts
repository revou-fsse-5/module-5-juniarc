const ActionType = {
    START_LOADING : 'START_LOADING',
    END_LOADING : 'END_LOADING'
}

export interface StartLoadingActionType {
    type: typeof ActionType.START_LOADING
}

export interface EndLoadingActionType {
    type: typeof ActionType.END_LOADING
}

function startLoadingActionCreator() : StartLoadingActionType {
    return {
        type: ActionType.START_LOADING
    }
}

function endLoadingActionCreator() : EndLoadingActionType {
    return {
        type: ActionType.END_LOADING
    }
}

export {
    ActionType,
    startLoadingActionCreator,
    endLoadingActionCreator
}