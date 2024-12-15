import React from 'react';

const ReservationForm = ({ name, contact, selectedArea, selectedTime, areas, timeslots, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => onChange('name', e.target.value)}
                    placeholder="Enter your name"
                />
            </div>
            <div>
                <label>Contact Information:</label>
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => onChange('contact', e.target.value)}
                    placeholder="Enter your contact information"
                />
            </div>
            <div>
                <label>Conservation Area:</label>
                <select
                    value={selectedArea}
                    onChange={(e) => onChange('selectedArea', e.target.value)}
                >
                    <option value="">Select Area</option>
                    {areas.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Reservation Time:</label>
                <select
                    value={selectedTime}
                    onChange={(e) => onChange('selectedTime', e.target.value)}
                >
                    <option value="">Select Time</option>
                    {timeslots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Reserve</button>
        </form>
    );
};

export default ReservationForm;