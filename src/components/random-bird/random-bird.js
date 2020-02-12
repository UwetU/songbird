import React from 'react';

import RandomBirdSong from '../random-bird-song';

import './random-bird.css'

const RandomBird = ({ url, name }) => {
    return (
        <div className="random-bird">
            <img src={url} alt="bird" />
            <RandomBirdSong birdName={name} />
        </div>
    );
};

export default RandomBird;