import { Reducer } from "redux";
import ActionTypes from "../../actions/ActionTypes";

interface InitialState {
    images: [],
    count: number,
    file: {} | null
}

const initialState: InitialState = {
    images: [],
    count: 0,
    file: null
};

const fetchImagesSuccess = (state: InitialState, { images, count, file }) => ({
    ...state,
    images,
    count,
    file
});

const fetchImagesError = (state: InitialState, { error }) => ({
    ...state,
    error
});

const reducer: Reducer<InitialState> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_IMAGES_SUCCESS: return fetchImagesSuccess(state, action);
        case ActionTypes.FETCH_IMAGES_FAIL: return fetchImagesError(state, action);
        default: return state;
    }
};

export default reducer;