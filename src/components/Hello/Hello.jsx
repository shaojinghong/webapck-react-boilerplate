import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Hello.scss';

const Hello = ({ msg }) => (
  <div className="hello">
    <h2>{msg}</h2>
  </div>
);

Hello.prototype.propTypes = {
  msg: PropTypes.string,
};

export default memo(Hello);
