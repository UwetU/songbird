import React from 'react';

import './app-header.css';

const AppHeader = ({ score }) => {
    return (
        <header className="app-header d-flex">
            <img src="/assets/songbird-logo.png" alt="logo" />
            <span className="user-score">Score: {score} </span>
        </header>
    );
};

export default AppHeader;