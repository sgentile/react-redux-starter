import * as ACTION from './actionTypes';
import {reset} from 'redux-form';


const addTodo = (todo) => {
  return {
    type: ACTION.ADD_TODO,
    todo
  }
};
const createTodo =(todo) => {
  return (dispatch, getState) => {
    dispatch(addTodo(todo));
    // return postWithToken('/api/validatePerson', {_id}, dispatch, getState, false).then((response) => {
    //   dispatch(onValidateSuccess(response.data));
    // }, (error) => dispatch(onValidateError(error)));
    dispatch(reset('addTodo'));
  }
};

export default createTodo;
