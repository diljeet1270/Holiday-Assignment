// CustomToggleButton.jsx
import React from 'react';
import ToggleButton from 'react-toggle-button';
import styles from './CustomToggleButton.module.css'; // Create a separate CSS module for styling

const CustomToggleButton = ({ field, form, ...props }) => {
  const { name, value } = field;

  const handleToggle = () => {
    form.setFieldValue(name, !value);
  };

  return (
    <ToggleButton
      value={value}
      onToggle={handleToggle}
      colors={{
        active: {
          base: 'rgb(47, 72, 107)',
        },
        inactive: {
          base: '#ccc',
        },
      }}
      trackStyle={{ width: '40px', height: '20px' }} // Customize the track size
      thumbStyle={{ width: '18px', height: '18px' }} // Customize the thumb size
      thumbAnimateRange={[2, 22]} // Adjust the range to hide labels
      {...props}
      className={styles.customToggleButton} // Apply custom styles from the CSS module
    />
  );
};

export default CustomToggleButton;
