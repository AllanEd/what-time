import React from 'react';
import TopBarInfo from '../../components/topBarInfo';
import './newAppointmentPage.scss';

const WEEKPICKER_WIDTH = 100;
const WEEKPICKER_HEIGHT = 100;

class AppointmentsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weekPicker: {
        active: false,
      },
    };

    this.activateWeekPicker = this.activateWeekPicker.bind(this);
    this.changeSize = this.changeSize.bind(this);
  }

  activateWeekPicker(e) {
    const { clientX } = e.touches[0];
    const { clientY } = e.touches[0];
    this.setState({
      weekPicker: {
        active: true,
        left: clientX - (WEEKPICKER_WIDTH / 2),
        top: clientY - (WEEKPICKER_HEIGHT / 2),
        width: WEEKPICKER_WIDTH,
        height: WEEKPICKER_HEIGHT,
      },
      initClientX: clientX,
      initClientY: clientY,
      oldClientX: clientX,
      oldClientY: clientY,
    });
  }

  changeSize(e) {
    const { clientX } = e.touches[0];
    const { clientY } = e.touches[0];

    const {
      weekPicker, initClientX, initClientY, oldClientX, oldClientY,
    } = this.state;

    const a1 = initClientX - clientX;
    const a2 = initClientY - clientY;
    const a = Math.sqrt((a1 ** 2) + (a2 ** 2));
    const b1 = initClientX - oldClientX;
    const b2 = initClientY - oldClientY;
    const b = Math.sqrt((b1 ** 2) + (b2 ** 2));

    const distance = a - b;

    const {
      left, top, width, height,
    } = weekPicker;

    this.setState({
      weekPicker: {
        active: true,
        left: left - (distance * 0.5),
        top: top - (distance * 0.5),
        width: width + distance,
        height: height + distance,
      },
      initClientX,
      initClientY,
      oldClientX: clientX,
      oldClientY: clientY,
    });
  }

  render() {
    const { weekPicker } = this.state;
    const {
      left, top, width, height,
    } = weekPicker;

    return (
      <div>
        <TopBarInfo text="New Appointment" />
        <form className="content">
          <input className="content__input content__input--first" type="text" name="title" placeholder="Title" />
          <input className="content__input" type="date" name="startDate" placeholder="Start date" />
          <input
            className="content__input"
            type="number"
            name="weeks"
            placeholder="Weeks"
            onTouchStart={this.activateWeekPicker}
          />
          <input className="content__input" type="submit" value="Submit" />
        </form>
        <div
          className={`week-picker ${weekPicker.active ? 'week-picker--active' : ''}`}
          onMouseMove={this.test}
        >
          <div
            className="week-picker__selector"
            style={{
              top, left, width, height,
            }}
            onTouchMove={this.changeSize}
            ref={div => this.weekPickerSelector = div}
          />
        </div>
      </div>
    );
  }
}

export default AppointmentsPage;
