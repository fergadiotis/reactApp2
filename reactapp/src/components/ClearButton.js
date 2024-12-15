import React from 'react';

const ClearButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="delete">
            Delete All Reservations
        </button>
    );
};

export default ClearButton;