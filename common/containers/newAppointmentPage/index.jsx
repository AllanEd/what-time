import React from 'react';
import TopBarInfo from '../../components/topBarInfo';
import './newAppointmentPage.scss';

class AppointmentsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weekPicker: {
        active: false,
      },
    };

    this.activateWeekPicker = this.activateWeekPicker.bind(this);
  }

  activateWeekPicker() {
    this.setState({
      weekPicker: {
        active: true,
      },
    });
  }

  render() {
    const { weekPicker } = this.state;

    return (
      <div>
        <TopBarInfo text="New Appointment" />
        <form className="content">
          <input className="content__input content__input--first" type="text" name="title" placeholder="Title" />
          <input className="content__input" type="date" name="startDate" placeholder="Start date" />
          <input className="content__input" type="number" name="weeks" placeholder="Weeks" onSelect={this.activateWeekPicker} />
          <input className="content__input" type="submit" value="Submit" />
        </form>
        <div
          className={`week-picker ${weekPicker.active ? 'week-picker--active' : ''}`}
          onClick={this.activateWeekPicker}
        >
          <div className="week-picker__selector" />
        </div>
      </div>
    );
  }
}

export default AppointmentsPage;
