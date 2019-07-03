import ActionTypes from "../ActionTypes";
import { AxiosResponse, AxiosError } from "axios";

export const fetchImagesStart = () => ({
    type: ActionTypes.FETCH_IMAGES,
    ready: false
});

export const fetchImagesFail = (error: AxiosError) => ({
    type: ActionTypes.FETCH_IMAGES_FAIL,
    error,
    ready: true
});

export const fetchImagesSuccess = (res: AxiosResponse) => ({
    type: ActionTypes.FETCH_IMAGES_SUCCESS,
    images: res.data.images,
    count: res.data.count,
    file: null,
    ready: true
});

export const fetchImagesInit = () => ({
    type: ActionTypes.FETCH_IMAGES_INIT
});

export const fileDrop = () => ({
    type: ActionTypes.FILE_DROP
});

export const removeImageInit = (name: string) => ({
    type: ActionTypes.REMOVE_IMAGE_INIT,
    name
});

export const removeImageStart = () => ({
    type: ActionTypes.REMOVE_IMAGE_START
});

export const removeImageSuccess = (res: AxiosResponse) => ({
    type: ActionTypes.REMOVE_IMAGE_SUCCESS,
    status: res.status
});

export const removeImageFail = (error) => ({
    type: ActionTypes.REMOVE_IMAGE_FAIL,
    error
});

export const uploadImageInit = (formData: FormData) => ({
    type: ActionTypes.UPLOAD_IMAGE_INIT,
    formData
});

export const uploadImageStart = () => ({
    type: ActionTypes.UPLOAD_IMAGE_START
});

export const uploadImageSuccess = (res: AxiosResponse) => ({
    type: ActionTypes.UPLOAD_IMAGE_SUCCESS,
    status: res.status
});

export const uploadImageFail = (error) => ({
    type: ActionTypes.UPLOAD_IMAGE_FAIL,
    error
});

export const setProgress = (progress) => ({
    type: ActionTypes.SET_PROGRESS
});
