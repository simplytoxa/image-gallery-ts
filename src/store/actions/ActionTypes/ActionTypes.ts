enum ActionTypes {
  TOGGLE_MODAL = 'TOGGLE_MODAL',
  FILE_DROP = 'FILE_DROP',

  FETCH_IMAGES = 'FETCH_IMAGES',
  FETCH_IMAGES_INIT = 'FETCH_IMAGES_INIT',
  FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS',
  FETCH_IMAGES_FAIL = 'FETCH_IMAGES_FAIL',

  REMOVE_IMAGE_INIT = 'REMOVE_IMAGE_INIT',
  REMOVE_IMAGE_START = 'REMOVE_IMAGE_START',
  REMOVE_IMAGE_FAIL = 'REMOVE_IMAGE_FAIL',
  REMOVE_IMAGE_SUCCESS = 'REMOVE_IMAGE_SUCCESS',

  UPLOAD_IMAGE_INIT = 'UPLOAD_IMAGE_INIT',
  UPLOAD_IMAGE_START = 'UPLOAD_IMAGE_START',
  UPLOAD_IMAGE_FAIL = 'UPLOAD_IMAGE_FAIL',
  UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS',

  SEARCH = 'SEARCH',
  SEARCH_START = 'SEARCH_START',
  SEARCH_SUCCESS = 'SEARCH_SUCCESS',
  SEARCH_FAIL = 'SEARCH_FAIL',

  DO_LOGOUT = 'DO_LOGOUT',
  DO_AUTH_INIT = 'DO_AUTH_INIT',
  DO_AUTH_START = 'DO_AUTH_INIT_START',
  DO_AUTH_FAIL = 'DO_AUTH_INIT_FAIL',
  DO_AUTH_SUCCESS = 'DO_AUTH_INIT_SUCCESS',
}
export default ActionTypes;
