import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'; 

const Button = ({ label, onClick, type }) => {
  return (
    <button className={styles.customButton} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
};

export default Button;