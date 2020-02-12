import React from 'react';

import AnswerOptionsBirdsItem from '../answer-options-birds-item';

import './answer-options-birds.css';

const AnswerOptionsBirds = ({ birdsData, selectBirds }) => {
    const elements = birdsData.map((item) => {
        const { id, name } = item;

        return (
            <li key={id}
                className="answer-options-birds-li list-group-item"
                onClick={() => selectBirds(birdsData, id)}>
                <AnswerOptionsBirdsItem name={name} />
            </li >
        );
    });

    return (
        <ul className="answer-options-birds list-group">
            {elements}
        </ul>
    );
};

export default AnswerOptionsBirds;