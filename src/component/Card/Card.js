import React from 'react';

const Card = ({url}) => {
    return (
        <div className = "Card">
            <img src = {url} alt = "img">

            </img>     
        </div>
    );
};

export default Card;