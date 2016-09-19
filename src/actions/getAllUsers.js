import * as ACTION from './actionTypes';

export default function getAllUsers() {
    return {
        type: ACTION.LOAD_USERS
    }
}