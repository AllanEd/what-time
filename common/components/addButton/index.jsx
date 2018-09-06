import React from 'react';
import PropTypes from 'prop-types';

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

    this.pos = {
      button: {
        left: 0,
        top: 0,
      },
      mouse: {
        left: 0,
        top: 0,
      },
    };

    this.timer = null;
    this.closeDrag = this.closeDrag.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.moveButton = this.moveButton.bind(this);
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

  moveButton(e) {
    e.preventDefault();
    const { draggable } = this.state;

    if (!draggable || e.clientX === 0) {
      return;
    }

    this.pos.button.left = this.pos.mouse.left - e.clientX;
    this.pos.button.top = this.pos.mouse.top - e.clientY;
    this.pos.mouse.left = e.clientX;
    this.pos.mouse.top = e.clientY;

    const nativeButtonNode = this.myRef.current;

    this.setState({
      top: nativeButtonNode.offsetTop - this.pos.button.top,
      left: nativeButtonNode.offsetLeft - this.pos.button.left,
    });
  }

  mouseDown(e) {
    this.timer = setTimeout(() => { this.setDraggable(true); }, 500);
    this.pos.mouse.left = e.clientX;
    this.pos.mouse.top = e.clientY;
  }

  render() {
    const { draggable, top, left } = this.state;
    const { clickFunction } = this.props;

    return (
      <div
        style={{ top, left }}
        className={`add-button ${draggable ? 'add-button--draggable' : ''}`}
        draggable={draggable}
        onMouseDown={this.mouseDown}
        onMouseUp={this.closeDrag}
        onDrag={this.moveButton}
        onDragEnd={this.closeDrag}
        onDoubleClick={this.resetPosition}
        onClick={clickFunction}
        onKeyDown={clickFunction}
        ref={this.myRef}
        role="button"
        tabIndex={0}
      >
        <img className="add-button__icon" src={addButtonIcon} alt="add Button" />
      </div>
    );
  }
}

AddButton.propTypes = {
  clickFunction: PropTypes.func.isRequired,
};

export default AddButton;
