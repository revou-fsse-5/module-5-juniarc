import { AnyAction } from "redux";
import { ActionType, ChartActionType } from "./action";
import { ChartItemType } from "../../types/type";

function chartReducer(chart: ChartItemType[] = [], action: ChartActionType | AnyAction) : ChartItemType[]{
    switch(action.type) {
        case ActionType.ADD_TO_CHART:
            return [...chart, action.payload.item]
        case ActionType.DELETE_FROM_CHART:
            return chart.filter(item => item.id !== action.payload.itemId)
        case ActionType.CHECKOUT_PRODUCTS:
            return [];
        case ActionType.GET_CHART_FROM_STORAGE:
            return action.payload.items;
        default:
            return chart;
    }
}

export default chartReducer;