import React from 'react';

import './answer-options-birds-item.css';

const AnswerOptionsBirdsItem = ({ name }) => {
    return (
        <span className="answer-options-birds-item">
            {name}
        </span>
    );
};

export default AnswerOptionsBirdsItem;