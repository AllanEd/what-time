import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Actions from '../actions/appointmentsActions';

import Appointment from '../components/appointment/Appointment';

// TODO: Actually the hole implementation...
class AppointmentsPage extends React.Component {
  constructor(props) {
    super(props);

    const { getAppointments } = this.props;
    getAppointments();
  }

  render() {
    const { appointments } = this.props;
    debugger;
    if (appointments === null) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <div>
        {appointments.map(appointment => <Appointment key={appointment.id} {...appointment} />)}
      </div>
    );
  }
}

AppointmentsPage.propTypes = {
  getAppointments: PropTypes.func.isRequired,
  appointments: PropTypes.arrayOf(PropTypes.shape()),
};

AppointmentsPage.defaultProps = {
  appointments: null,
};

function mapStateToProps(state) {
  return {
    appointments: state.getAppointments ? state.getAppointments.appointments : null,
  };
}

const mapDispatchToProps = dispatch => ({
  getAppointments: (name, password) => {
    dispatch(Actions(name, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsPage);
