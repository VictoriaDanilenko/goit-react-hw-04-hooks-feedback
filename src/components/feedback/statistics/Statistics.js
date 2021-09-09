import React from 'react';
import PropTypes from 'prop-types';
import StatisticsWrapper from './StatisticsStyled';

const Statistics = ({ props, total, positiveFeedbackPercentage }) => {
  return (
    <StatisticsWrapper>
      <ul className="statistics_list list">
        {Object.keys(props).map(item => (
          <li className="statistics_item" key={item}>
            <p className="statistics_text">
              {item[0].toUpperCase() + item.slice(1)}:
            </p>
            <span className="statistics_quantity">{props[item]}</span>
          </li>
        ))}
      </ul>

      <p className="statistics_total">Total: {total()}</p>
      <p className="statistics_percentage">
        Positive feedback: {positiveFeedbackPercentage()}%
      </p>
    </StatisticsWrapper>
  );
};

export default Statistics;
Statistics.propTypes = {
  props: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  positiveFeedbackPercentage: PropTypes.func.isRequired,
};