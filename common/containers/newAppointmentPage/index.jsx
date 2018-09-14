import React from 'react';
import TopBarInfo from '../../components/topBarInfo';
import './newAppointmentPage.scss';

const WEEKPICKER_WIDTH = 200;
const WEEKPICKER_HEIGHT = 200;

class AppointmentsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weekPicker: {
        active: false,
        value: 0,
      },
    };

    this.showWeekPicker = this.showWeekPicker.bind(this);
    this.hideWeekPicker = this.hideWeekPicker.bind(this);
    this.setWeekPickerValue = this.setWeekPickerValue.bind(this);
  }

  setWeekPickerValue(value) {
    this.setState(prevState => ({
      weekPicker: {
        ...prevState.weekPicker,
        value,
      },
    }));
  }

  showWeekPicker(e) {
    const { clientX } = e.touches[0];
    const { clientY } = e.touches[0];

    this.setState({
      weekPicker: {
        active: true,
        left: clientX - (WEEKPICKER_WIDTH / 2),
        top: clientY - (WEEKPICKER_HEIGHT / 2),
      },
    });
  }

  hideWeekPicker() {
    this.setState(prevState => ({
      weekPicker: {
        ...prevState.weekPicker,
        active: false,
      },
    }));
  }

  render() {
    const { weekPicker } = this.state;
    const {
      left, top,
    } = weekPicker;

    return (
      <div>
        <TopBarInfo text="New Appointment" />
        <form
          className="content"
          onTouchEnd={this.hideWeekPicker}
        >
          <input className="content__input content__input--first" type="text" name="title" placeholder="Title" />
          <input className="content__input" type="date" name="startDate" placeholder="Start date" />
          <input
            className="content__input"
            type="number"
            name="weeks"
            placeholder="Weeks"
            onTouchStart={this.showWeekPicker}
          />
          <input className="content__input" type="submit" value="Submit" />
        </form>
        <div className={`week-picker-container ${weekPicker.active ? 'week-picker-container--active' : ''}`}>
          <div style={{ transform: `translate3d(${left}px, ${top}px, 2px)` }} className={`week-picker ${weekPicker.active ? 'week-picker--active' : ''}`}>
            <div
              className={`week week--first ${weekPicker.value === 1 ? 'week--active' : ''}`}
            >
              1
            </div>
            <div className="week">
              2
            </div>
            <div className="week">
              3
            </div>
            <div className="week">
              4
            </div>
            {/* <div
          className={`week-picker ${weekPicker.active ? 'week-picker--active' : ''}`}
            style={{
              width,
              height,
              transform: `translate3d(${left}px, ${top}px, 2px)`,
            }}
          /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentsPage;
