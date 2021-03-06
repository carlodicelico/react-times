import React, { PropTypes } from 'react';

const Button = (props) => {
  const {
    text,
    onClick
  } = props;

  return (
    <div
      className="time_picker_button"
      onClick={onClick}>
      {text}
    </div>
  )
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: 'button',
  onClick: () => {}
};

export default Button;
