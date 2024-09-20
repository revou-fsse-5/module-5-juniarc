/**
 * categoryReducer tes scenario
 *
 * categoryReducer function
 * - should return initialstate when given by uknown action
 * - should return category object when given by GET_CATEGORy action
 */

import { CategoryType } from '../../types/type';
import categoryReducer from './reducer';

describe('categoryReducer function', () => {
	it('should return initialstate when given by uknown action', () => {
		// arrange
		const initialstate: CategoryType = {};
		const action = {
			type: 'UKNOWN',
		};

		// action

		const nextState = categoryReducer(initialstate, action);

		// assert
		expect(nextState).toEqual(initialstate);
	});

	it('should return category object when given by GET_CATEGORy action', () => {
		// arrange
		const initialstate: CategoryType = {};
		const action = {
			type: 'GET_CATEGORY',
			payload: {
				category: {
					id: 1,
					name: 'NEW NAME',
					image: 'https://i.imgur.com/QkIa5tT.jpeg',
					creationAt: '2024-09-10T23:45:18.000Z',
					updatedAt: '2024-09-11T10:51:00.000Z',
				},
			},
		};

		// action

		const nextState = categoryReducer(initialstate, action);

		// assert
		expect(nextState).toEqual(action.payload.category);
	});
});
