import React from 'react';

import RandomBirdSong from '../random-bird-song';

import './random-bird.css'

const RandomBird = ({ url, name, audio }) => {
    return (
        <div className="random-bird">
            <img src={url} alt="bird" />
            <RandomBirdSong birdName={name} audio={audio} />
        </div>
    );
};

export default RandomBird;