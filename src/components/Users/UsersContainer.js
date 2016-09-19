import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import {addUser, getAllUsers} from '../../actions';

import Users from './Users';
import AddUserForm from './AddUserForm';

class UsersContainer extends Component{

    render(){
        return (
            <div>
                <div className="centerText">
                    <h1>Users</h1>
                </div>
                <div className="mt10">
                    <AddUserForm addUser={this.props.addUser} />
                </div>
                <div className="mt5">
                    <Users users={this.props.users}/>
                </div>
            </div>
        );
    }
}

// Determine which state to map into container's props
function select(state){
    return {
        users: state.usersState.users
    };
}

export default connect(
    select, {
        getAllUsers,
        addUser
    } // comma delimited list of actionCreators
)(UsersContainer);
