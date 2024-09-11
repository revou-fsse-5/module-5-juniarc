/**
 * getAllCategory scenario test
 * 
 * getAllCategory thunk
 * - should dispatch action correctly when data fetching success
 * - should dsipatch acition and call console correctly when data fetching failed
 */

import api from "../../network/api";
import { getAllCategory } from "./action";
import { getAllCategoryActionCreator } from "./action";

// mock api
jest.mock('../../network/api', () => ({
    getAllCategory: jest.fn()
}))

// mock dispatch 
const dispatch = jest.fn();

// mock console
const errorConsole = jest.spyOn(console, 'log').mockImplementation(() => {}); 

const fakeResponse = [
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

const fakeErrorResponse = new Error('Something is Error. Try again');

describe('getAllCategory thunk', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        errorConsole.mockReset();
    })

    it('should dispatch action and call console correctly when data fetching failed', async () => {
        // arrange
        (api.getAllCategory as jest.Mock).mockRejectedValue(fakeErrorResponse);

        // action
        await getAllCategory()(dispatch);

        // assert
        expect(errorConsole).toHaveBeenCalledWith(fakeErrorResponse);
    });

    it('should dispatch action correctly when data fetching success', async () => {
        // arrange
        (api.getAllCategory as jest.Mock).mockResolvedValue(fakeResponse);

        // action
        await getAllCategory()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(getAllCategoryActionCreator(fakeResponse))
    })
})
