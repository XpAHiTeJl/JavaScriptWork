import React from 'react';

export const Button = ({ cn, text, onClickHandler }) => {
    return (
        <button onClick={onClickHandler} className={`btn btn${cn}`}>
            {text}
        </button>
    );
};
