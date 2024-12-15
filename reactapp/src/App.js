import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';
import ClearButton from './components/ClearButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: JSON.parse(localStorage.getItem('reservations')) || [],
      selectedArea: '',
      selectedTime: '',
      name: '',
      contact: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.reservations !== this.state.reservations) {
      localStorage.setItem('reservations', JSON.stringify(this.state.reservations));
    }
  }

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, contact, selectedArea, selectedTime, reservations } = this.state;

    if (!name || !contact || !selectedArea || !selectedTime) {
      alert("Please fill in all fields");
      return;
    }

    const isAlreadyBooked = reservations.some(
      (reservation) =>
        reservation.area === selectedArea && reservation.time === selectedTime
    );

    if (isAlreadyBooked) {
      alert("This time slot is already booked.");
      return;
    }

    const newReservation = { name, contact, area: selectedArea, time: selectedTime };

    this.setState((prevState) => ({
      reservations: [...prevState.reservations, newReservation],
      name: '',
      contact: '',
      selectedArea: '',
      selectedTime: ''
    }));

    alert("Your reservation was successfully made!");
  };

  handleDeleteAll = () => {
    this.setState({ reservations: [] });
    localStorage.removeItem('reservations');
    alert("All reservations have been deleted");
  };

  render() {
    const { selectedArea, selectedTime, name, contact, reservations } = this.state;
    const areas = ["Area 1", "Area 2", "Area 3", "Area 4"];
    const timeslots = ["9:00 AM - 12:00 PM", "12:00 PM - 3:00 PM", "3:00 PM - 6:00 PM"];

    return (
      <div>
        <Header />
        <ReservationForm
          name={name}
          contact={contact}
          selectedArea={selectedArea}
          selectedTime={selectedTime}
          areas={areas}
          timeslots={timeslots}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ReservationList reservations={reservations} />
        <ClearButton onClick={this.handleDeleteAll} />
      </div>
    );
  }
}

export default App;