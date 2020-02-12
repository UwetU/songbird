import React from 'react';

import AppHeader from '../app-header';
import NavLevelBar from '../nav-level-bar';
import RandomBird from '../random-bird';
import birdData from '../../data/birds-data';
import AnswerOptionsBirds from '../answer-options-birds';
import InfoGuessedBird from '../info-guessed-bird';
import NextLevelBtn from '../next-level-btn';

import './app.css';


const App = () => {

    const currentBirdData = birdData[0];

    const birdLevelData = [
        { category: 'Разминка', currentItem: true, id: 1 },
        { category: 'Воробьиные', currentItem: false, id: 2 },
        { category: 'Лесные', currentItem: false, id: 3 },
        { category: 'Певчие', currentItem: false, id: 4 },
        { category: 'Хищные', currentItem: false, id: 5 },
        { category: 'Морские', currentItem: false, id: 6 }
    ];

    const defaultUrlImg = '/assets/none-bird.png';
    const currenUrlSong = '';
    const defaultBirdName = '******';
    const defaultBirdNameLat = '******';
    const defaultInfoBird = '';

    return (
        <div className="wrapper">
            <AppHeader score={0} />
            <NavLevelBar label={birdLevelData} />
            <RandomBird url={defaultUrlImg} name={defaultBirdName} />
            <div className="info-and-answer-birds">
                <AnswerOptionsBirds birdsData={currentBirdData} />
                <InfoGuessedBird birdName={defaultBirdName}
                    birdNameLat={defaultBirdNameLat}
                    urlSong={currenUrlSong}
                    urlImage={defaultUrlImg}
                    infoBird={defaultInfoBird} />
            </div>
            <NextLevelBtn />
        </div>
    );
}

export default App;