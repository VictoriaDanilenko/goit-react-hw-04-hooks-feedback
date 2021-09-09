import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './FeedbackOptionsStyled';

const FeedbackOptions = ({ options, onHandleClick }) => {
  return (
    <Buttons>
      {Object.keys(options).map(item => (
        <button
          className="feedback_btn"
          onClick={onHandleClick}
          type="button"
          name={item}
          key={item}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </Buttons>
  );
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};