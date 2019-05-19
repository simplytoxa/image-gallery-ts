import { Reducer } from "redux";
import { ToolbarAction } from "../../actions/toolbar/toolbar";
import ActionTypes from "../../actions/ActionTypes";

class InitialState {
    constructor(private isModalOpen = false) {}
}

const initialState = new InitialState();

const toogleModal = (state: InitialState, { isModalOpen }: ToolbarAction) => ({
    ...state,
    isModalOpen
});

const reducer: Reducer = (state = initialState, action: ToolbarAction) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_MODAL: return toogleModal(state, action);
        default: return state;
    }
};

export default reducer;