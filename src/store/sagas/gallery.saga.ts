import { put } from "redux-saga/effects";
import { Action, AnyAction } from "redux";
import ActionTypes from "../actions/ActionTypes";
import * as actions from "../actions";
import axios from "../../axios-instance";
import { AxiosResponse, AxiosError } from "axios";

export function* fetchImagesSaga() {
  try {
    yield put(actions.fetchImagesStart() as Action<ActionTypes.FETCH_IMAGES>);
    const result: AxiosResponse = yield axios.get("/images");
    yield put((
      actions.fetchImagesSuccess(result as AxiosResponse)
    ) as Action<ActionTypes.FETCH_IMAGES_SUCCESS>);
  } catch (error) {
    yield put((
      actions.fetchImagesFail(error as AxiosError)
    ) as Action<ActionTypes.FETCH_IMAGES_FAIL>);
  }
}

export function* removeImageSaga(action: AnyAction) {
  try {
    yield put(actions.removeImageStart() as Action<ActionTypes.REMOVE_IMAGE_START>);
    const result: AxiosResponse = yield axios.post('/remove', { name: action.name });
    yield put(actions.removeImageSuccess(result as AxiosResponse) as Action<ActionTypes.REMOVE_IMAGE_SUCCESS>);
    yield put(actions.fetchImagesInit());
  } catch(error) {
    yield put(actions.removeImageFail(error as AxiosError) as Action<ActionTypes.REMOVE_IMAGE_FAIL>);
  }
}

export function* uploadImageSaga(action: AnyAction) {
    try {
      yield put(actions.uploadImageStart());
      const result: AxiosResponse = yield axios.post('/upload', action.formData);
      yield put(actions.uploadImageSuccess(result as AxiosResponse) as Action<ActionTypes.UPLOAD_IMAGE_SUCCESS>);
      yield put(actions.fetchImagesInit());
      yield put(actions.toggleModal(true));
    } catch (error) {
      yield put(actions.uploadImageFail(error as AxiosError) as Action<ActionTypes.UPLOAD_IMAGE_FAIL>);
    }
}
