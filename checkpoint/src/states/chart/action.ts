import { Dispatch } from 'redux';
import { ChartItemType } from '../../types/type';
import { RootState } from '..';

const ActionType = {
	ADD_TO_CHART: 'ADD_TO_CHART',
	GET_CHART_FROM_STORAGE: "GET_CHART_FROM_STORAGE",
	DELETE_FROM_CHART: 'DELETE_FROM_CHART',
	CHECKOUT_PRODUCTS: "CHECKOUT_PRODUCTS"
} as const;

export interface AddToChartActionType {
	type: typeof ActionType.ADD_TO_CHART;
	payload: {
		item: ChartItemType;
	};
}

export interface GetChartFromStorageActionType {
	type: typeof ActionType.GET_CHART_FROM_STORAGE;
	payload: {
		items?: ChartItemType[] | null
	}
}

export interface DeleteFromChartActionType {
	type: typeof ActionType.DELETE_FROM_CHART;
    payload: {
        itemId: number
    }
}

export interface CheckoutProductsActionType {
	type : typeof ActionType.CHECKOUT_PRODUCTS;
}

function addToChartActionCreator(
	item: ChartItemType
): AddToChartActionType {
	return {
		type: ActionType.ADD_TO_CHART,
		payload: {
			item,
		},
	};
}

function getChartFromStorageActionCreator(items?: ChartItemType[]) : GetChartFromStorageActionType {
	return {
		type: ActionType.GET_CHART_FROM_STORAGE,
		payload: {
			items
		}
	}
}

function deleteFromChartActionCreator(itemId: number): DeleteFromChartActionType {
	return {
		type: ActionType.DELETE_FROM_CHART,
        payload: {
            itemId
        }
	};
}

function checkoutProductsActionCreator() {
	return {
		type: ActionType.CHECKOUT_PRODUCTS,
	}
}

function addToChart(item: ChartItemType) {
    return (dispatch: Dispatch<AddToChartActionType>, getState: () => RootState) => {
		const { chart } = getState();
        dispatch(addToChartActionCreator(item))
		const updateChart = [...chart, item];
		const chartString = JSON.stringify(updateChart);
		localStorage.setItem('chart', chartString);
    }
}

function getChartFromStorage() {
	return async (dispatch: Dispatch<GetChartFromStorageActionType>) => {
		const chart = localStorage.getItem('chart');
		try {
			if(chart) {
				const parsedChart = JSON.parse(chart)
				dispatch(getChartFromStorageActionCreator(parsedChart))
			}
		} catch (error) {
			alert(error)
		}
	}
}

function deleteFromChart(itemId: number) {
	return (dispatch: Dispatch<DeleteFromChartActionType>, getState: () => RootState) => {
		dispatch(deleteFromChartActionCreator(itemId))
		const { chart } = getState();
		const updateChart = chart.filter((item: ChartItemType) => item.id !== itemId)
		localStorage.setItem('chart', JSON.stringify(updateChart));
	}
}

function checkoutProducts() {
	return (dispatch: Dispatch<CheckoutProductsActionType>) => {
		dispatch(checkoutProductsActionCreator());
		localStorage.removeItem('chart');
	}
}

export type ChartActionType = AddToChartActionType | DeleteFromChartActionType | CheckoutProductsActionType | GetChartFromStorageActionType

export { ActionType, addToChartActionCreator,getChartFromStorageActionCreator, deleteFromChartActionCreator, checkoutProductsActionCreator, addToChart, deleteFromChart, checkoutProducts, getChartFromStorage };
