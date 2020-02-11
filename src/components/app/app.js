import React, { Component } from 'react';

import AppHeader from '../app-header';

import './app.css';

export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <AppHeader />
            </div>
        );
    };
}