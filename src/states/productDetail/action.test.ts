/**
 * getProductDetail scenario test
 *
 * getProductDetail thunk
 * - should dispatch action correctly when data fetching success
 * - should dsipatch acition and call alert correctly when data fetching failed
 */

import api from '../../network/api';
import { endLoadingActionCreator, startLoadingActionCreator } from '../isLoading/action';
import { getProductDetail } from './action';
import { getProductDetailActionCreator } from './action';

// mock api
jest.mock('../../network/api', () => ({
	getProductDetail: jest.fn(),
}));

// mock dispatch
const dispatch = jest.fn();

// mock alert
const alertMock = jest.fn();
window.alert = alertMock;

const fakeResponse = {
	id: 37,
	title: 'Chic Summer Terbaru',
	price: 33,
	description:
		'Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.',
	images: ['["https://api.escuelajs.co/api/v1/files/5c5e.jpg"]'],
	creationAt: '2024-09-10T23:45:18.000Z',
	updatedAt: '2024-09-11T15:10:54.000Z',
	category: {
		id: 4,
		name: 'Shoes',
		image: 'https://i.imgur.com/qNOjJje.jpeg',
		creationAt: '2024-09-10T23:45:18.000Z',
		updatedAt: '2024-09-10T23:45:18.000Z',
	},
};

const fakeErrorResponse = new Error('Something is Error. Try again');

describe('getProductDetail thunk', () => {
	beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should dsipatch acition and call alert correctly when data fetching failed', async () => {
        // arrange
        (api.getProductDetail as jest.Mock).mockRejectedValue(fakeErrorResponse)

        // action
        await getProductDetail('37')(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
        expect(alertMock).toHaveBeenCalledWith(fakeErrorResponse);
        expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
    })

    it('should dispatch action correctly when data fetching success', async () => {
        (api.getProductDetail as jest.Mock).mockResolvedValue(fakeResponse);

        // action
        await getProductDetail('37')(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
        expect(api.getProductDetail).toHaveBeenCalledWith('37');
        expect(dispatch).toHaveBeenCalledWith(getProductDetailActionCreator(fakeResponse));
        expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
    })
});
