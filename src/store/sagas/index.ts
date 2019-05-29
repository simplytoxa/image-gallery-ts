import { takeLatest, takeEvery } from "redux-saga/effects";
import { fetchImagesSaga, removeImageSaga } from "./gallery";
import ActionTypes from "../actions/ActionTypes";

export function* watchGallery() {
    yield takeLatest(ActionTypes.FETCH_IMAGES_INIT, fetchImagesSaga);
    yield takeEvery(ActionTypes.REMOVE_IMAGE_INIT, removeImageSaga);
}