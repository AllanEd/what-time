import React from 'react';
import PropTypes from 'prop-types';

import './topBarInfo.scss';

function TopBarInfo({ text }) {
  return (
    <div className="top-bar-info">
      {text}
    </div>
  );
}

TopBarInfo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TopBarInfo;
