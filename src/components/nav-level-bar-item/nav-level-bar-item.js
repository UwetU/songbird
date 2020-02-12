import React from 'react';

import './nav-level-bar-item.css';

const NavLevelBarItem = ({ label }) => {
    return (
        <span className="nav-level-bar-item">
            {label}
        </span>
    );
};

export default NavLevelBarItem;