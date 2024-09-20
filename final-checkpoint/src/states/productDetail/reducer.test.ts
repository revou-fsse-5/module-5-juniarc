/**
 * productDetailReducer tes scenario
 *
 * productDetailReducer function
 * - should return initialstate when given by uknown action
 * - should return product object when given by GET_PRODUCT_DETAIL action
 */

import productDetailReducer from './reducer';
import { ProductDetailType } from '../../types/type';

describe('productDetailReducer function', () => {
	it('should return initialstate when given by uknown action', () => {
		// arrange
		const initialstate: ProductDetailType = {};
		const action = {
			type: 'UKNOWN',
		};

		// action
		const nextState = productDetailReducer(initialstate, action);

		// assert
		expect(nextState).toEqual(initialstate);
	});

	it('should return product object when given by GET_PRODUCT_DETAIL action', () => {
		// arrange
		const initialstate: ProductDetailType = {};
		const action = {
			type: 'GET_PRODUCT_DETAIL',
			payload: {
				product: {
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
			},
		};

		// action
		const nextState = productDetailReducer(initialstate, action);

		// assert
		expect(nextState).toEqual(action.payload.product);
	});
});
