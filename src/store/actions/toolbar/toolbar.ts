import ActionTypes from '../ActionTypes';
import { Action } from 'redux';

export interface ToolbarAction extends Action<ActionTypes> {
    isModalOpen: boolean;
}

export const toogleModal = (isModalOpen: boolean): ToolbarAction => {
    window.scrollTo(0, 0);

    const body = document.querySelector("body");
    body && body.classList.toggle("open-modal");

    return {
        type: ActionTypes.TOGGLE_MODAL,
        isModalOpen: !isModalOpen
    };
};
