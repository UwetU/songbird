import React from 'react';

import './info-guessed-bird.css';

const InfoGuessedBird = ({ birdName, birdNameLat, urlSong, urlImage, infoBird }) => {
    return (
        <div className="info-guessed-bird">
            <div className="wrapper-img-info-bird">
                <img src={urlImage} alt="bird" />
                <div className="info-current-bird">
                    <h3>{birdName}</h3>
                    <p>{birdNameLat}</p>
                    <audio controls src={urlSong}></audio>
                </div>
            </div>
            <p>{infoBird}</p>
        </div>
    );
};

export default InfoGuessedBird;