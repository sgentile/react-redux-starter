import * as ACTION from './actionTypes';

const onDeleteToDo = (id) => {
  debugger;
  return {
    type: ACTION.DELETE_TODO,
    id
  }
};

export default onDeleteToDo;
