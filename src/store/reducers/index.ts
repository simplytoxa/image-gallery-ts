import { combineReducers } from "redux";
import toolbar from './toolbar';
import gallery from './gallery';

const rootReducer = combineReducers({
    toolbar,
    gallery
});

export default rootReducer;