import React from 'react';

import { connect } from 'react-redux';

import getAppointments from '../actions/appointmentsActions';

// TODO: Actually the hole implementation...
class AppointmentsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getApp();
  }

  render() {
    return (
      <h1>
        Appointments
      </h1>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.login.loggedInUser,
  };
}

const mapDispatchToProps = dispatch => ({
  getApp: (name, password) => {
    dispatch(getAppointments(name, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsPage);
