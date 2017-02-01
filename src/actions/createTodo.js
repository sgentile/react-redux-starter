import * as ACTION from './actionTypes';

const createTodo =(todo) => {
    return {
        type: ACTION.ADD_TODO,
        todo
    }
};

export default createTodo;
