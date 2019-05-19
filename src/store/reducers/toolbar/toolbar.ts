import { Reducer } from "redux";
import { ToolbarAction } from "../../actions/toolbar/toolbar";
import ActionTypes from "../../actions/ActionTypes";

interface InitialState {
    isModalOpen: boolean
}

const initialState: InitialState = {
    isModalOpen: false
};

const toogleModal = (state: InitialState, { isModalOpen }: ToolbarAction) => ({
    ...state,
    isModalOpen
});

const reducer: Reducer<InitialState, ToolbarAction> = (state = initialState, action: ToolbarAction) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_MODAL: return toogleModal(state, action);
        default: return state;
    }
};

export default reducer;