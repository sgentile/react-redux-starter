import * as ACTION from '../actions/actionTypes';

const initialState = {
    nextId: 3,
    users: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Bob'}
    ]
};

const usersState = (state = initialState, action) => {
    console.log(state);
    switch(action.type){
        case  ACTION.LOAD_USERS: {
            return Object.assign({}, state);
        }

        case ACTION.ADD_USER: {
            Object.assign({}, state, {nextId: state.nextId++});
            return Object.assign({}, state, {
                users: [
                    ...state.users,
                    {
                        id: state.nextId,
                        name: action.user.name
                    }
                ]
            })
        }

        default:
            return state;
    }
};

export default usersState;
