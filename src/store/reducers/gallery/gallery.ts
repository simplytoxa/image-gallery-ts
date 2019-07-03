import { Reducer, Action } from "redux";
import ActionTypes from "../../actions/ActionTypes";

interface InitialState {
    images: [],
    count: number,
    file: {} | null,
    ready: boolean,
    progress: number
}

const initialState: InitialState = {
    images: [],
    count: 0,
    file: null,
    ready: false,
    progress: 0
};

const fetchImagesSuccess = (state: InitialState, { images, count, file, ready }) => ({
    ...state,
    images,
    count,
    file,
    ready
});

const fetchImagesError = (state: InitialState, { error, ready }) => ({
    ...state,
    error,
    ready
});

const fileDrop = (state: InitialState, { file }: Action<ActionTypes.FILE_DROP>) => ({
    ...state,
    file
});

const setProgress = (state: InitialState, { progress }: Action<ActionTypes.SET_PROGRESS>) => ({
    ...state,
    progress
});

const reducer: Reducer<InitialState> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_IMAGES_SUCCESS: return fetchImagesSuccess(state, action);
        case ActionTypes.FETCH_IMAGES_FAIL: return fetchImagesError(state, action);
        case ActionTypes.FILE_DROP: return fileDrop(state, action);
        case ActionTypes.SET_PROGRESS: return setProgress(state, action);
        default: return state;
    }
};

export default reducer;