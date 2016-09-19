import * as ACTION from './actionTypes';

export default function addUser(user) {
    return {
        type: ACTION.ADD_USER,
        user
    }
}