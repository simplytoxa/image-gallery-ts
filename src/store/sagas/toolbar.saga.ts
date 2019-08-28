// import { put } from "redux-saga/effects";
// import { Action } from "redux";
// import ActionTypes from "../actions/ActionTypes";
// import * as actions from "../actions";
// import axios from "../../axios-instance";
// import { AxiosResponse, AxiosError } from "axios";

// export function* removeImageSaga(action: Action<ActionTypes.REMOVE_IMAGE_INIT>) {
//   try {
//     yield put(actions.removeImageStart() as Action<ActionTypes.REMOVE_IMAGE_START>);
//     const result: AxiosResponse = yield axios.post('/remove', { name: action.name });
//     yield put(actions.removeImageSuccess(result as AxiosResponse) as Action<ActionTypes.REMOVE_IMAGE_SUCCESS>);
//     yield put(actions.fetchImagesInit());
//   } catch(error) {
//     yield put(actions.removeImageFail(error as AxiosError) as Action<ActionTypes.REMOVE_IMAGE_FAIL>);
//   }
// }
