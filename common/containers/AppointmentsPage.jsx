import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Actions from '../actions/appointmentsActions';

import TopBarInfo from '../components/topBarInfo';
import Appointment from '../components/appointment';
import AddButton from '../components/addButton';

// TODO: Actually the hole implementation...
class AppointmentsPage extends React.Component {
  constructor(props) {
    super(props);

    const { getAppointments } = this.props;
    getAppointments();
  }

  render() {
    const { appointments } = this.props;
    if (appointments === null) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <div>
        <TopBarInfo text="Appointment Overview" />
        {appointments.map(appointment => <Appointment key={appointment.id} {...appointment} />)}
        <AddButton />
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
