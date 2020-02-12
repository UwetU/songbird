import React from 'react';

import NavLevelBarItem from '../nav-level-bar-item';

import './nav-level-bar.css';

const NavLevelBar = ({ label }) => {

    const elements = label.map((item) => {

        const { id, category, currentItem } = item;
        let classNames = 'list-group-item';
        if (currentItem) {
            classNames += ' current';
        }

        return (
            <li key={id} className={classNames}>
                <NavLevelBarItem label={category} />
            </li>
        );
    });

    return (
        <ul className="nav-level-bar list-group">
            {elements}
        </ul>
    );
}

export default NavLevelBar;