import ActionTypes from '../ActionTypes';
import { AxiosResponse, AxiosError } from 'axios';

export const fetchImagesStart = () => ({
  type: ActionTypes.FETCH_IMAGES,
  ready: false,
});

export const fetchImagesFail = (error: AxiosError) => ({
  type: ActionTypes.FETCH_IMAGES_FAIL,
  error,
  ready: true,
});

export const fetchImagesSuccess = (res: AxiosResponse) => ({
  type: ActionTypes.FETCH_IMAGES_SUCCESS,
  images: res.data.images,
  count: res.data.count,
  file: null,
  ready: true,
});

export const fetchImagesInit = () => ({
  type: ActionTypes.FETCH_IMAGES_INIT,
});

export const fileDrop = (file: File) => ({
  type: ActionTypes.FILE_DROP,
  isModalOpen: true,
  file,
});

export const removeImageInit = (img: string) => ({
  type: ActionTypes.REMOVE_IMAGE_INIT,
  img,
});

export const removeImageStart = () => ({
  type: ActionTypes.REMOVE_IMAGE_START,
});

export const removeImageSuccess = (res: AxiosResponse) => ({
  type: ActionTypes.REMOVE_IMAGE_SUCCESS,
  status: res.status,
});

export const removeImageFail = (error: AxiosError) => ({
  type: ActionTypes.REMOVE_IMAGE_FAIL,
  error,
});

export const uploadImageInit = (formData: FormData) => ({
  type: ActionTypes.UPLOAD_IMAGE_INIT,
  formData,
});

export const uploadImageStart = () => ({
  type: ActionTypes.UPLOAD_IMAGE_START,
});

export const uploadImageSuccess = (res: AxiosResponse) => ({
  type: ActionTypes.UPLOAD_IMAGE_SUCCESS,
  status: res.status,
});

export const uploadImageFail = (error: AxiosError) => ({
  type: ActionTypes.UPLOAD_IMAGE_FAIL,
  error,
});

export const toggleModal = (isModalOpen: boolean) => {
  window.scrollTo(0, 0);

  const body = document.querySelector('body');
  body && body.classList.toggle('open-modal');

  return {
    type: ActionTypes.TOGGLE_MODAL,
    isModalOpen: !isModalOpen,
    file: null,
  };
};

export const handleSearch = (term: string) => ({
  type: ActionTypes.SEARCH,
  term,
});

export const handleSearchStart = () => ({
  type: ActionTypes.SEARCH_START,
});

export const handleSearchSuccess = (res: AxiosResponse) => ({
  type: ActionTypes.SEARCH_SUCCESS,
  status: res.status,
});

export const handleSearchFail = (error: AxiosError) => ({
  type: ActionTypes.SEARCH_FAIL,
  error,
});
