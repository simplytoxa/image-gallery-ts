import ActionTypes from "../ActionTypes";
import axios from "../../../axios-instance";
import { AxiosResponse } from "axios";

export const fetchImagesStart = () => ({
    type: ActionTypes.FETCH_IMAGES
});

export const fetchImagesFail = (error) => ({
    type: ActionTypes.FETCH_IMAGES_FAIL,
    error
});

export const fetchImagesSuccess = (res: AxiosResponse) => ({
    type: ActionTypes.FETCH_IMAGES_SUCCESS,
    images: res.data.images,
    count: res.data.count,
    file: null
});

export const fetchImages = () => {
  return (dispatch) => {
      dispatch(fetchImagesStart());
      axios
        .get("/images")
        .then(
            (res: AxiosResponse) => dispatch(fetchImagesSuccess(res)),
            (error) => dispatch(fetchImagesFail(error))
        );
  };
};
