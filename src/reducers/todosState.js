import * as ACTION from '../actions/actionTypes';

const initialState = {
    nextId: 3,
    todos: [
        {id: 1, name: 'Take out trash', completed: true},
        {id: 2, name: 'Wash dishes', completed: false}
    ]
};

const todosState = (state = initialState, action) => {
    console.log(state);
    switch(action.type){
        case  ACTION.LOAD_TODOS: {
            return Object.assign({}, state);
        }

        case ACTION.ADD_TODO: {
            Object.assign({}, state, {nextId: state.nextId++});
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        id: state.nextId,
                        name: action.todo.name,
                        completed: false
                    }
                ]
            })
        }

        case ACTION.TODO_STATUS_CHANGE: {
            return Object.assign({}, state, {
                todos: state.todos.map((item) => {
                    if(item.id === action.todo.id){
                        return Object.assign({}, item, {completed: !action.todo.completed});
                    }
                    return item;
                })
            });
        }

        default:
            return state;
    }
};

export default todosState;
