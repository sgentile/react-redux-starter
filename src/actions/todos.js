import * as ACTION from './actionTypes';

export default function getAllTodos() {
    return {
        type: ACTION.LOAD_TODOS
    }
}