import { takeLatest, takeEvery, all } from 'redux-saga/effects';
import { fetchImagesSaga, removeImageSaga, uploadImageSaga } from './gallery.saga';
import ActionTypes from '../actions/ActionTypes';

export function* rootSaga() {
  yield all([
    takeLatest(ActionTypes.FETCH_IMAGES_INIT, fetchImagesSaga),
    takeEvery(ActionTypes.REMOVE_IMAGE_INIT, removeImageSaga),
    takeEvery(ActionTypes.UPLOAD_IMAGE_INIT, uploadImageSaga),
  ]);
}
