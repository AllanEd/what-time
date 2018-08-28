import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Actions from '../actions/appointmentsActions';

// TODO: Actually the hole implementation...
class AppointmentsPage extends React.Component {
  constructor(props) {
    super(props);

    const { getAppointments } = this.props;
    getAppointments();
  }

  render() {
    return (
      <h1>
        Appointments
      </h1>
    );
  }
}

AppointmentsPage.propTypes = {
  getAppointments: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    appointments: state.getAppointments,
  };
}

const mapDispatchToProps = dispatch => ({
  getAppointments: (name, password) => {
    dispatch(Actions(name, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsPage);
