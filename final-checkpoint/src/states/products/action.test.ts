/**
 * getAllProducts scenario test
 *
 * getAllProducts thunk
 * - should dispatch action correctly when data fetching success
 * - should dsipatch acition and call alert correctly when data fetching failed
 */

import api from '../../network/api';
import {
	endLoadingActionCreator,
	startLoadingActionCreator,
} from '../isLoading/action';
import { getAllProducts, getAllProductsByCategory } from './action';
import { getAllProductsActionCreator,getAllProductsByCategoryActionCreator } from './action';

// mock api
jest.mock('../../network/api', () => ({
	getAllProducts: jest.fn(),
    getAllProductsByCategory: jest.fn()
}));

// mock dispatch
const dispatch = jest.fn();

// mock alert
const alertMock = jest.fn();
window.alert = alertMock;

const fakeResponse = [
	{
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
	},
	{
		id: 38,
		title: 'Vibrant Runners: Bold Orange & Blue Sneakers',
		price: 27,
		description:
			"Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
		images: ['["https://i.imgur.com/hKcMNJs.jpeg"]'],
		creationAt: '2024-09-10T23:45:18.000Z',
		updatedAt: '2024-09-11T15:17:59.000Z',
		category: {
			id: 4,
			name: 'Shoes',
			image: 'https://i.imgur.com/qNOjJje.jpeg',
			creationAt: '2024-09-10T23:45:18.000Z',
			updatedAt: '2024-09-10T23:45:18.000Z',
		},
	},
];

const fakeResponseByCategory = [
	{
		id: 52,
		title: 'Speakers',
		price: 50,
		description: 'Last product available to buy',
		images: ['["https://placeimg.com/640/480/any"]'],
		creationAt: '2024-09-10T23:46:23.000Z',
		updatedAt: '2024-09-10T23:46:23.000Z',
		category: {
			id: 1,
			name: 'prevName',
			image: 'https://i.imgur.com/QkIa5tT.jpeg',
			creationAt: '2024-09-10T23:45:18.000Z',
			updatedAt: '2024-09-11T15:32:27.000Z',
		},
	},
	{
		id: 55,
		title: 'Speakers',
		price: 50,
		description: 'Last product available to buy',
		images: ['["https://placeimg.com/640/480/any"]'],
		creationAt: '2024-09-10T23:46:53.000Z',
		updatedAt: '2024-09-10T23:46:53.000Z',
		category: {
			id: 1,
			name: 'prevName',
			image: 'https://i.imgur.com/QkIa5tT.jpeg',
			creationAt: '2024-09-10T23:45:18.000Z',
			updatedAt: '2024-09-11T15:32:27.000Z',
		},
	},
];

const fakeErrorResponse = new Error('Something is Error. Try again');

describe('getAllProducts thunk', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should dsipatch acition and call alert correctly when data fetching failed', async () => {
		// arrange
		(api.getAllProducts as jest.Mock).mockRejectedValue(fakeErrorResponse);

		// action
		await getAllProducts()(dispatch);

		// assert
		expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
		expect(api.getAllProducts).toHaveBeenCalledWith();
		expect(alertMock).toHaveBeenCalledWith(fakeErrorResponse);
		expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
	});

	it('should dispatch action correctly when data fetching success', async () => {
		// arrange
		(api.getAllProducts as jest.Mock).mockResolvedValue(fakeResponse);

		// action
		await getAllProducts()(dispatch);

		// assert
		expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
		expect(api.getAllProducts).toHaveBeenCalledWith();
		expect(dispatch).toHaveBeenCalledWith(
			getAllProductsActionCreator(fakeResponse)
		);
		expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
	});
});

/**
 * getAllProductsByCategory scenario test
 *
 * getAllProductsByCategory thunk
 * - should dispatch action correctly when data fetching success
 * - should dsipatch acition and call alert correctly when data fetching failed
 */


describe('getAllProductsByCategory thunk', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should dsipatch acition and call alert correctly when data fetching failed', async () => {
		// arrange
		(api.getAllProductsByCategory as jest.Mock).mockRejectedValue(fakeErrorResponse);

		// action
		await getAllProductsByCategory('1')(dispatch);

		// assert
		expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
		expect(api.getAllProductsByCategory).toHaveBeenCalledWith('1');
		expect(alertMock).toHaveBeenCalledWith(fakeErrorResponse);
		expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
	});

	it('should dispatch action correctly when data fetching success', async () => {
		// arrange
		(api.getAllProductsByCategory as jest.Mock).mockResolvedValue(fakeResponseByCategory);

		// action
		await getAllProductsByCategory('1')(dispatch);

		// assert
		expect(dispatch).toHaveBeenCalledWith(startLoadingActionCreator());
		expect(api.getAllProductsByCategory).toHaveBeenCalledWith('1');
		expect(dispatch).toHaveBeenCalledWith(
			getAllProductsByCategoryActionCreator(fakeResponseByCategory)
		);
		expect(dispatch).toHaveBeenCalledWith(endLoadingActionCreator());
	});
});