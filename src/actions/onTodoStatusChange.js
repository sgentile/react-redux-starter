import * as ACTION from './actionTypes';

export default function onTodoStatusChange(todo) {
    return {
        type: ACTION.TODO_STATUS_CHANGE,
        todo
    }
}