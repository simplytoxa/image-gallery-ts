import { takeLatest, takeEvery } from "redux-saga/effects";
import { fetchImagesSaga, removeImageSaga, uploadImageSaga } from "./gallery.saga";
import ActionTypes from "../actions/ActionTypes";

export function* watchGallery() {
    yield takeLatest(ActionTypes.FETCH_IMAGES_INIT, fetchImagesSaga);
    yield takeEvery(ActionTypes.REMOVE_IMAGE_INIT, removeImageSaga);
    yield takeEvery(ActionTypes.UPLOAD_IMAGE_INIT, uploadImageSaga);
}
