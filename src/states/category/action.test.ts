/**
 * getCategory scenario test
 *
 * getCategory thunk
 * - should dispatch action correctly when data fetching success
 * - should dsipatch acition and call alert correctly when data fetching failed
 */

import api from '../../network/api';
import { getCategory } from './action';
import { getCategoryActionCreator } from './action';

// mock api

jest.mock('../../network/api', () => ({
	getCategory: jest.fn(),
}));

// mock dispatch
const dispatch = jest.fn();

// mock alert
const alertMock = jest.fn();
window.alert = alertMock

const fakeResponse = {
	id: 1,
	name: 'NEW NAME',
	image: 'https://i.imgur.com/QkIa5tT.jpeg',
	creationAt: '2024-09-10T23:45:18.000Z',
	updatedAt: '2024-09-11T10:51:00.000Z',
};

const fakeErrorResponse = new Error('Something is Error. Try again');

describe('getCategory thunk', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it('should dsipatch acition and call alert correctly when data fetching failed', async () =>{
        // arrange
        (api.getCategory as jest.Mock).mockRejectedValue(fakeErrorResponse);

        // action
        await getCategory('1')(dispatch);

        // assert
        expect(api.getCategory).toHaveBeenCalledWith('1');
        expect(alertMock).toHaveBeenCalledWith(fakeErrorResponse);
    });

    it('should dispatch action correctly when data fetching success', async () =>{
        // arrange
        (api.getCategory as jest.Mock).mockResolvedValue(fakeResponse);

        // action
        await getCategory('1')(dispatch);

        // assert
        expect(api.getCategory).toHaveBeenCalledWith('1');
        expect(dispatch).toHaveBeenCalledWith(getCategoryActionCreator(fakeResponse));
    })
})
