import * as ACTION from './actionTypes';

export default function createTodo(todo) {
    return {
        type: ACTION.ADD_TODO,
        todo
    }
}