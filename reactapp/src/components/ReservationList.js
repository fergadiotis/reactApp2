import React from 'react';

const ReservationList = ({ reservations }) => {
    return (
        <div>
            <h2>Existing Reservations:</h2>
            <ul>
                {reservations.map((reservation, index) => (
                    <li key={index}>
                        {reservation.name} - {reservation.contact} | {reservation.area} | {reservation.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationList;