import { Reducer, Action } from "redux";
import ActionTypes from "../../actions/ActionTypes";

interface InitialState {
    images: [],
    count: number,
    file: {} | null,
    ready: boolean,
    isModalOpen: boolean
}

const initialState: InitialState = {
    images: [],
    count: 0,
    file: null,
    ready: false,
    isModalOpen: false
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

const fileDrop = (state: InitialState, { file, isModalOpen }: Action<ActionTypes.FILE_DROP>) => ({
    ...state,
    file,
    isModalOpen
});

const toggleModal = (state: InitialState, { isModalOpen, file }) => ({
    ...state,
    isModalOpen,
    file
});

const reducer: Reducer<InitialState> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_IMAGES_SUCCESS: return fetchImagesSuccess(state, action);
        case ActionTypes.FETCH_IMAGES_FAIL: return fetchImagesError(state, action);
        case ActionTypes.FILE_DROP: return fileDrop(state, action);
        case ActionTypes.TOGGLE_MODAL: return toggleModal(state, action);
        default: return state;
    }
};

export default reducer;
