import React, { Component } from 'react';

import AppHeader from '../app-header';
import NavLevelBar from '../nav-level-bar';
import RandomBird from '../random-bird';
import birdData from '../../data/birds-data';
import AnswerOptionsBirds from '../answer-options-birds';
import InfoGuessedBird from '../info-guessed-bird';
import NextLevelBtn from '../next-level-btn';

import './app.css';


export default class App extends Component {

    currentBirdData = birdData[0];

    state = {
        id: 1,
        name: '******',
        species: '******',
        description: '',
        image: '/assets/none-bird.png',
        audio: ''
    }

    correctAnswer = Math.floor(Math.random() * this.currentBirdData.length);
    correctAudio = this.currentBirdData[this.correctAnswer].audio;
    correctName = '******';
    correctImg = '/assets/none-bird.png';

    selectBirds = (arr, id) => {
        this.setState((state) => {
            const index = arr.findIndex((el) => el.id === id);
            if (this.correctAnswer === index) {
                this.correctName = arr[index].name;
                this.correctImg = arr[index].image;
            }
            return state = arr[index];
        });
    };

    render() {

        //console.log(this.correctAnswer);
        //console.log(this.correctAudio);

        const { image, audio, name, species, description } = this.state;

        const birdLevelData = [
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
                <NavLevelBar label={birdLevelData} />
                <RandomBird url={this.correctImg} name={this.correctName} audio={this.correctAudio} />
                <div className="info-and-answer-birds">
                    <AnswerOptionsBirds selectBirds={this.selectBirds} birdsData={this.currentBirdData} />
                    <InfoGuessedBird birdName={name}
                        birdNameLat={species}
                        urlSong={audio}
                        urlImage={image}
                        infoBird={description} />
                </div>
                <NextLevelBtn />
            </div>
        );
    };
}