/**
 * productsReducer tes scenario
 *
 * productsReducer function
 * - should return initialstate when given by uknown action
 * - should return products array when given by GET_ALL_PRODUCTS action
 * - should return products array when given by GET_ALL_PRODUCTS_BY_CATEGORY action
 */

import productsReducer from './reducer';
import { ProductItemType } from '../../types/type';

describe('productDetailReducer function', () => {
	it('should return initialstate when given by uknown action', () => {
		// arrange
		const initialstate: ProductItemType[] = [];
		const action = {
			type: 'UKNOWN',
		};

		// action
		const nextState = productsReducer(initialstate, action);

		// assert
		expect(nextState).toEqual(initialstate);
	});

	it('should return products array when given by GET_ALL_PRODUCTS action', () => {
		// arrange
		const initialstate: ProductItemType[] = [];
		const action = {
			type: 'GET_ALL_PRODUCTS',
			payload: {
				products: [
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
                ],
			},
		};

		// action
		const nextState = productsReducer(initialstate, action);

		// assert
		expect(nextState).toEqual(action.payload.products);
	});

    it('should return products array when given by GET_ALL_PRODUCTS_BY_CATEGORY action', () => {
		// arrange
		const initialstate: ProductItemType[] = [];
		const action = {
			type: 'GET_ALL_PRODUCTS_BY_CATEGORY',
			payload: {
				products: [
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
                ],
			},
		};

		// action
		const nextState = productsReducer(initialstate, action);

		// assert
		expect(nextState).toEqual(action.payload.products);
	});
});
