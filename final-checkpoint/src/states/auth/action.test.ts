/**
 * signin test scenario
 * 
 * * signin thunk
 * - should dsipatch acition and call console correctly when data fetching failed
 * - should dispatch action correctly when data fetching success
 * 
 */

import api from "../../network/api";
import { signin, signinActionCreator } from "./action";
import { startLoadingActionCreator, endLoadingActionCreator } from "../isLoading/action";

// mock api
jest.mock('../../network/api', () => ({
    signin: jest.fn(),
    getUserWithSession: jest.fn()
}));

// mock dispatch
const dispatch = jest.fn();

const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');

// mock alert
window.alert = jest.fn();

// data dummy
const email = "nico@gmail.com";
const password = "1234";
const fakeResponse = {
    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg",
    refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjcyODAyMDI4fQ.P1_rB3hJ5afwiG4TWXLq6jOAcVJkvQZ2Z-ZZOnQ1dZw"
}

const fakeErrorResponse = new Error('Something is Error. Try again');

describe('signin thunk', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    it('should dsipatch acition and call console correctly when data fetching failed', async () => {
        // arrange
        (api.signin as jest.Mock).mockRejectedValue(fakeErrorResponse);
        (api.getUserWithSession as jest.Mock).mockRejectedValue(fakeErrorResponse)

        // action
        const result = await signin({ email, password})(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
        expect(api.signin).toHaveBeenCalledWith({ email, password });
        expect(api.getUserWithSession).not.toHaveBeenCalledWith();
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse)
        expect(result).toBe(false)
        expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
    })

    it('should dispatch action correctly when data fetching success', async () => {
        // arrange
        (api.signin as jest.Mock).mockResolvedValue(fakeResponse);
        (api.getUserWithSession as jest.Mock).mockResolvedValue({})

        // action
        const result = await signin({ email, password})(dispatch);
        const token = await api.signin({ email, password })

        // assert
        expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
        expect(api.signin).toHaveBeenCalledWith({ email, password})
        expect(mockSetItem).toHaveBeenCalledWith('accessToken', fakeResponse.access_token);
        expect(dispatch).toHaveBeenCalledWith(signinActionCreator(fakeResponse.access_token));
        expect(api.getUserWithSession).toHaveBeenCalledWith();
        expect(result).toBe(true)
        expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());

    })
})
