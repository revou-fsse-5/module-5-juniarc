/**
 * authReducer tes scenario
 * 
 * authReducer function
 * - should return initialstate when given by uknown action
 * - should return accessToken string when given by SIGN_IN
 * - should return accessToken empty string ('') when given by SIGN_OUT
 */

import authReducer from "./reducer";

describe('authReducer function', () => {
    it('should return initialstate when given by uknown action', () => {
        // arrange
        const initialstate: string = '';
        const action = { type: 'UKNOWN' };

        // action
        const nextState = authReducer(initialstate, action);

        // assert
        expect(nextState).toEqual(initialstate);
    })

    it('should return accessToken string when given by SIGN_IN', () => {
        // arrange
        const initialstate: string = '';
        const action = {
            type: 'SIGN_IN',
            payload: {
                accessToken: 'token'
            }
        }

        // action 
        const nextState = authReducer(initialstate, action);

        // assert
        expect(nextState).toEqual(action.payload.accessToken)
    })

    it("should return accessToken empty string ('') when given by SIGN_OUT", () => {
        // arrange
        const initialstate: string = '';
        const action = {
            type: 'SIGN_OUT',
            payload: {
                accessToken: ''
            }
        }

        // action 
        const nextState = authReducer(initialstate, action);

        // assert
        expect(nextState).toEqual(action.payload.accessToken)
    })
})