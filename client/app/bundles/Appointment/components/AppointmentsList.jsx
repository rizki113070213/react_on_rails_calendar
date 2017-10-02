import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Appointment } from './Appointment';

export const AppointmentsList = ({appointments}) =>
  <div>
    {appointments.map((appointment) => {
      return(
        <Appointment appointment={appointment} key={appointment.id} />
      )
    })}
  </div>

AppointmentsList.propTypes = {
  appointments: PropTypes.array.isRequired
}
