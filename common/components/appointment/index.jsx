import React from 'react';
import PropTypes from 'prop-types';

import './appointment.scss';

function Appointment(props) {
  const { title, startDate, subscribers } = props;
  const formattedStartDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(startDate));
  const subscibersName = subscribers.map(subscriber => subscriber.name);

  return (
    <div className="appointment">
      <h1 className="appointment__title">
        {title}
      </h1>
      <p className="appointment__content">
        {formattedStartDate}
      </p>
      <h2 className="appointment__hdl">
        {'Participants'}
      </h2>
      <p className="appointment__content">
        {subscibersName.join(', ')}
      </p>
    </div>
  );
}

Appointment.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  subscribers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Appointment;
