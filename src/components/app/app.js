import React from 'react';

import AppHeader from '../app-header';
import NavLevelBar from '../nav-level-bar';

import './app.css';

const App = () => {

    const birdLableData = [
        { category: 'Разминка', currentItem: true, id: 1 },
        { category: 'Воробьиные', currentItem: false, id: 2 },
        { category: 'Лесные', currentItem: false, id: 3 },
        { category: 'Певчие', currentItem: false, id: 4 },
        { category: 'Хищные', currentItem: false, id: 5 },
        { category: 'Морские', currentItem: false, id: 6 }
    ];

    return (
        <div className="wrapper">
            <AppHeader score={0} />
            <NavLevelBar label={birdLableData} />
        </div>
    );
}

export default App;