import ActionTypes from '../ActionTypes';
import { Action } from 'redux';

export interface ToolbarAction extends Action<ActionTypes> {
    isModalOpen: boolean;
}

export const toogleModal = (isModalOpen: boolean): ToolbarAction => ({
    type: ActionTypes.TOGGLE_MODAL,
    isModalOpen: !isModalOpen
});