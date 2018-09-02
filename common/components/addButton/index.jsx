import React from 'react';

import addButtonIcon from './addButton.svg';
import './addButton.scss';

class AddButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      draggable: false,
      top: null,
      left: null,
    };

    this.pos1 = 0;
    this.pos2 = 0;
    this.pos3 = 0;
    this.pos4 = 0;
    this.timer = null;
    this.closeDrag = this.closeDrag.bind(this);
    this.dragMouseDown = this.dragMouseDown.bind(this);
    this.elementDrag = this.elementDrag.bind(this);
    this.myRef = React.createRef();
    this.resetPosition = this.resetPosition.bind(this);
  }

  setDraggable(value) {
    this.setState({
      draggable: value,
    });
  }

  resetPosition() {
    this.setState({
      draggable: false,
      top: null,
      left: null,
    });
  }

  closeDrag() {
    clearTimeout(this.timer);
    this.setDraggable(false);
  }

  elementDrag(e) {
    if (!this.state.draggable) {
      return;
    }
    const node = this.myRef.current;
    e.preventDefault();
    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    this.setState({
      top: node.offsetTop - this.pos2,
      left: node.offsetLeft - this.pos1,
    });
  }

  dragMouseDown(e) {
    e.preventDefault();
    this.timer = setTimeout(() => { this.setDraggable(true); }, 500);
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
  }

  render() {
    const { draggable, top, left } = this.state;

    return (
      <button
        ref={this.myRef}
        type="button"
        style={{ top, left }}
        className={`add-button ${draggable ? 'add-button--draggable' : ''}`}
        onMouseDown={this.dragMouseDown}
        onMouseUp={this.closeDrag}
        onMouseMove={this.elementDrag}
        onMouseLeave={this.closeDrag}
        onDoubleClick={this.resetPosition}
      >
        <img className="add-button__icon" src={addButtonIcon} alt="add Button" />
      </button>
    );
  }
}

export default AddButton;
