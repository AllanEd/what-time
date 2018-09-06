import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../actions/appointmentsActions';
import TopBarInfo from '../components/topBarInfo';

class AppointmentsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TopBarInfo text="New Appointment" />
        <form>
          <input type="text" name="appointment" />
          <input type="date" name="startDate" />
          <input type="number" name="weeks" />
          <input type="number" name="days" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

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
