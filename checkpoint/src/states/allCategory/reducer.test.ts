/**
 * allCategoryReducer tes scenario
 * 
 * allCategoryReducer function
 * - should return initialstate when given by uknown action
 * - should return categories array when given by GET_ALL_CATEGORy action
 */

import allCategoryReducer from "./reducer"
import { CategoryType } from "../../types/type";

describe('allCategoryReducer function', () => {
    it('should return iniitialstate when given by uknown action', () => {
        // arrange
        const initialstate: CategoryType[] = [];
        const action = { type: 'UKNOWN' };

        // action
        const nextState = allCategoryReducer(initialstate, action);

        // assert
        expect(nextState).toEqual(initialstate);
    });

    it('should return categories array when given by GET_ALL_CATEGORy action', () => {
        // arrange
        const initialstate: CategoryType[] = [];
        const action = {
            type: 'GET_ALL_CATEGORY',
            payload: {
                categories: [
                    {
                      "id": 1,
                      "name": "NEW NAME",
                      "image": "https://i.imgur.com/QkIa5tT.jpeg",
                      "creationAt": "2024-09-10T23:45:18.000Z",
                      "updatedAt": "2024-09-11T10:51:00.000Z"
                    },
                    {
                      "id": 2,
                      "name": "Electronics",
                      "image": "https://i.imgur.com/ZANVnHE.jpeg",
                      "creationAt": "2024-09-10T23:45:18.000Z",
                      "updatedAt": "2024-09-10T23:45:18.000Z"
                    }
                ]
            }
        }

        // action
        const nextState = allCategoryReducer(initialstate, action);

        // assert 
        expect(nextState).toEqual(action.payload.categories);
    })
})