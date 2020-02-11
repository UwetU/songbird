import React, { Component } from 'react';

import './app-header.css';

export default class AppHeader extends Component {
    score = 0;
    render() {
        return (
            <header className="app-header d-flex">
                <img src="/assets/songbird-logo.png" alt="logo" />
                <span className="user-score">Score: {this.score} </span>
            </header>
        );
    };
}