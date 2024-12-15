import React from 'react';

function DealCard({ image, description }) {
    return (
        <div className="deal">
            <img src={image} alt={description} />
            <p>{description}</p>
        </div>
    );
}

export default DealCard;
