import React from 'react';
import {Link} from 'react-router';

const MenuItems = ({currentRoutePath}) => {
    return (
        <ul className="sidebar-menu">
            <li className={currentRoutePath === '/root' ? 'active' : ''}><Link to={'/'}><i className="fa fa-home"></i> <span>Home</span></Link></li>
            <li className={currentRoutePath === '/users' ? 'active' : ''}><Link to={'/users'}><i className="fa fa-users"></i> <span>Users</span></Link></li>
        </ul>
    )
};

export default MenuItems;
