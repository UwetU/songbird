import React from 'react';

import './random-bird-song.css';

const RandomBirdSong = ({ birdName, audio }) => {
    return (
        <div className="random-bird-song">
            <p className="name-song-bird">{birdName}</p>
            <audio controls src={audio}></audio>
        </div>
    );
};

export default RandomBirdSong;